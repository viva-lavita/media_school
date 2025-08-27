from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import Q
from django.utils.timezone import now

User = get_user_model()


class BaseContent(models.Model):
    """Абстрактная модель элементов контента."""

    author = models.ForeignKey(User, on_delete=models.PROTECT, editable=False, verbose_name="Автор")
    updated_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        editable=False,
        default=None,
        null=True,
        blank=True,
        related_name="%(class)s_updated",
        verbose_name="Последний редактор",
    )
    author_for_display = models.CharField(max_length=100, blank=True, null=True, verbose_name="Автор для отображения")
    title = models.CharField(max_length=255, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")
    image_path = models.URLField(verbose_name="Ссылка на картинку-заголовок", blank=True, null=True)
    is_published = models.BooleanField(verbose_name="Опубликовано", default=False)
    updated_at = models.DateTimeField(verbose_name="Дата изменения", auto_now=True)
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    class Meta:
        abstract = True
        ordering = ["-updated_at", "-created_at"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.author_for_display:
            self.author_for_display = f"{self.author.get_full_name()}"
        super().save(*args, **kwargs)


class News(BaseContent):
    """Новости."""

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"


class Announcement(BaseContent):
    """Анонсы."""

    class Meta:
        verbose_name = "Анонс"
        verbose_name_plural = "Анонсы"


class Competition(BaseContent):
    """Конкурсы."""

    start_date = models.DateField(verbose_name="Дата начала")
    end_date = models.DateField(verbose_name="Дата окончания")

    class Meta:
        verbose_name = "Конкурс"
        verbose_name_plural = "Конкурсы"

    def __str__(self):
        return self.title

    @property
    def date(self):
        return f"{self.start_date} - {self.end_date}"

    @property
    def is_active(self):
        return self.start_date <= now().date() <= self.end_date

    @property
    def is_over(self):
        return now().date() > self.end_date

    @property
    def is_future(self):
        return now().date() < self.start_date


class Paragraph(models.Model):
    """Параграф новости, анонса, конкурса."""

    news = models.ForeignKey(
        News, on_delete=models.CASCADE, related_name="paragraphs", null=True, blank=True, verbose_name="Новость"
    )
    announcement = models.ForeignKey(
        Announcement, on_delete=models.CASCADE, related_name="paragraphs", null=True, blank=True, verbose_name="Анонс"
    )
    competition = models.ForeignKey(
        Competition, on_delete=models.CASCADE, related_name="paragraphs", null=True, blank=True, verbose_name="Конкурс"
    )
    title = models.CharField(max_length=510, null=True, blank=True, verbose_name="Заголовок")
    text = models.TextField(blank=True, null=True, verbose_name="Текст")
    image = models.URLField(null=True, blank=True, verbose_name="Ссылка на картинку")
    link_text = models.CharField(max_length=255, blank=True, null=True, verbose_name="Текст ссылки")
    link_url = models.URLField(max_length=200, blank=True, null=True, verbose_name="Ссылка")
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Параграф"
        verbose_name_plural = "Параграфы"
        ordering = ["pk"]
        constraints = [
            models.CheckConstraint(
                name="news_or_announcement_or_competition",
                check=Q(news__isnull=False) | Q(announcement__isnull=False) | Q(competition__isnull=False),
            ),
            models.CheckConstraint(
                name="only_one_news_or_announcement_or_competition",
                check=(
                    (Q(news__isnull=False) & Q(announcement__isnull=True) & Q(competition__isnull=True))
                    | (Q(news__isnull=True) & Q(announcement__isnull=False) & Q(competition__isnull=True))
                    | (Q(news__isnull=True) & Q(announcement__isnull=True) & Q(competition__isnull=False))
                ),
            ),
        ]

    @property
    def news_or_announcement_or_competition(self):
        """Возвращает новость, анонс или конкурс."""
        return self.news or self.announcement or self.competition

    def __str__(self):
        return f"{self.title} ({self.news or self.announcement or self.competition})"
