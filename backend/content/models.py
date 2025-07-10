from django.contrib.auth import get_user_model
from django.db import models
from django.utils.timezone import now

User = get_user_model()


class Catalog(models.Model):
    name = models.CharField(max_length=255, unique=True, db_index=True, verbose_name="Название")
    image_path = models.URLField(verbose_name="Ссылка на картинку-заголовок категории")
    title = models.CharField(max_length=510, verbose_name="Заголовок категории")
    description = models.TextField(blank=True, null=True, verbose_name="Описание категории")

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name


class PhotoContent(models.Model):
    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE, verbose_name="Категория")
    image_path = models.URLField(verbose_name="Ссылка на картинку")
    description = models.CharField(
        max_length=510, null=True, blank=True, verbose_name="Описание картинки (для внутреннего использования)"
    )
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Фотография"
        verbose_name_plural = "Фотографии"

    def __str__(self):
        return self.description


class VideoContent(models.Model):
    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE, verbose_name="Категория")
    video_path = models.URLField(verbose_name="Ссылка на видео")
    description = models.CharField(
        max_length=510, null=True, blank=True, verbose_name="Описание видео (для внутреннего использования)"
    )
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Видео"
        verbose_name_plural = "Видео"

    def __str__(self):
        return self.description


class DocumentContent(models.Model):
    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE, verbose_name="Категория")
    document_path = models.URLField(verbose_name="Ссылка на файл")
    description = models.CharField(
        max_length=510, null=True, blank=True, verbose_name="Описание (для внутреннего использования)"
    )
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    def __str__(self):
        return self.description

    class Meta:
        verbose_name = "Файлы"
        verbose_name_plural = "Файлы"


class BaseContent(models.Model):
    catalog = models.ForeignKey(Catalog, on_delete=models.PROTECT, verbose_name="Категория")
    created_by = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        verbose_name="Автор",
    )
    updated_by = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        verbose_name="Последний редактор",
        blank=True,
        null=True,
    )
    author_for_display = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Автор (для отображения на странице)"
    )
    title = models.CharField(max_length=255, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")
    image_path = models.URLField(verbose_name="Ссылка на картинку-заголовок", blank=True, null=True)
    updated_at = models.DateTimeField(verbose_name="Дата изменения", auto_now=True)
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.author_for_display:
            self.author_for_display = f"{self.created_by.get_full_name()}"
        super().save(*args, **kwargs)


class News(BaseContent):
    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"


class Announcement(BaseContent):
    class Meta:
        verbose_name = "Анонс"
        verbose_name_plural = "Анонсы"


class Competition(BaseContent):
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
