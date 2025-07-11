from backend.config import settings
from django.db import models
from django.urls import reverse
from django.utils.text import slugify

# NEWS_CATEGORY = [
#     "Новости",
#     "Анонсы",
#     "Конкурсы"
# ]
#
# BLOCK_TYPE = [
#     "Текст",
#     "Изображение"
# ]
#
# QUESTION_CATEGORY = [
#     "Вопрос эксперту/преподавателю",
#     "Технический вопрос",
#     "Другое"
# ]


class News(models.Model):
    """
    Хранит новости из раздела 'Новости, анонсы и конкурсы'.
    Содержит заголовок, категорию (Новости/Анонсы/Конкурсы), автора, вступительный текст, превью-изображение (URL на внешнее хранилище), дата публикации и флаг публикации.
    Используется дял отображения карточек и детальной страницы новости.
    """

    class NewsCategory(models.TextChoices):
        NEWS = "news", "Новости"
        ANNOUNCEMENT = "announcement", "Анонсы"
        CONTESTS = "contests", "Конкурсы"

    title = models.CharField(verbose_name="Заголовок", max_length=255)

    slug = models.SlugField(verbose_name="URL", blank=True, null=False, unique=True, db_index=True)

    category = models.CharField(
        verbose_name="Категория новости", choices=NewsCategory.choices, max_length=30, default=NewsCategory.NEWS
    )

    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="Автор новости", on_delete=models.CASCADE)

    preview_text = models.TextField(verbose_name="Вступительный текст для карточки")

    preview_image = models.URLField(
        verbose_name="Превью-изображение для новости", max_length=255, blank=True, null=True
    )

    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    updated_at = models.DateTimeField(verbose_name="Дата изменения", auto_now=True)

    is_published = models.BooleanField(verbose_name="Флаг публикации", default=False)

    def __str__(self):
        return f"News: {self.title}"

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"

    def get_absolute_url(self):
        return reverse("news", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class ContentBlock(models.Model):
    """
    Хранит блоки контента внутри новости (текст или изображение).
    Содержит заголовок текст или URL изображения (внешнее хранилище), тип блока, порядок.
    Используется для гибкого формирования контента новости.
    """

    class BlockType(models.TextChoices):
        TEXT = "text", "Текст"
        IMAGE = "image", "Изображение"

    news = models.ForeignKey(News, verbose_name="Ссылка на новость", on_delete=models.CASCADE)

    title = models.CharField(verbose_name="Заголовок блока", max_length=255, blank=True, null=True)

    type = models.CharField(verbose_name="Тип блока", max_length=30, choices=BlockType.choices, default=BlockType.TEXT)

    content_text = models.TextField(verbose_name="Текст блока", blank=True, null=True)

    content_image = models.URLField(verbose_name="Изображение блока", max_length=255, blank=True, null=True)

    order = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"Block: {self.title}"

    class Meta:
        ordering = ["order"]
        verbose_name = "Блок новости"
        verbose_name_plural = "Блоки новостей"


class Question(models.Model):
    """
    Хранит вопросы пользователей к новости в блоке 'Комментарии и вопросы'.
    Содержит категорию (Эксперт/Технический/Другое), текст вопроса, автора и флаг модерации.
    Используется для отображения вопросов и их обсуждения.
    """

    class QuestionCategory(models.TextChoices):
        EXPERT = "expert", "Вопрос эксперту/преподавателю"
        TECHNICAL = "technical", "Технический вопрос"
        OTHER = "other", "Другое"

    news = models.ForeignKey(News, verbose_name="Ссылка на новость", on_delete=models.CASCADE)

    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="Автор вопроса", on_delete=models.CASCADE)

    category = models.CharField(
        verbose_name="Тип вопроса", max_length=30, choices=QuestionCategory.choices, default=QuestionCategory.EXPERT
    )

    text = models.TextField(verbose_name="Текст вопроса")

    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    is_approved = models.BooleanField(verbose_name="Флаг модерации", default=False)

    def __str__(self):
        return f"Question: {self.text[:50]}"

    class Meta:
        verbose_name = "Вопрос"
        verbose_name_plural = "Вопросы"


class Comment(models.Model):
    """
    Хранит комментарии к вопросам новости.
    Содержит текст комментария, автора и флаг модерации.
    Используется для обсуждения вопросов в блоке 'Комментарии и вопросы'.
    """

    question = models.ForeignKey(Question, verbose_name="Ссылка на вопрос", on_delete=models.CASCADE)

    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="Автор комментария", on_delete=models.CASCADE)

    text = models.TextField(verbose_name="Текст комментария")

    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    is_approved = models.BooleanField(verbose_name="Флаг модерации", default=False)

    def __str__(self):
        return f"Comment: {self.text[:50]}"

    class Meta:
        verbose_name = "Комментарий"
        verbose_name_plural = "Комментарии"
