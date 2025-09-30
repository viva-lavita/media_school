from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Catalog(models.Model):
    """Модель категорий материалов."""

    name = models.CharField(max_length=255, unique=True, db_index=True, verbose_name="Название")
    image = models.FileField(upload_to="catalogs/", verbose_name="Картинка категории")
    title = models.CharField(max_length=510, verbose_name="Заголовок категории")
    description = models.TextField(blank=True, null=True, verbose_name="Описание категории")

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name


class PhotoContent(models.Model):
    """Фотоконтент школы."""

    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE, verbose_name="Категория")
    image = models.FileField(upload_to="photos/", verbose_name="Картинка")
    description = models.CharField(
        max_length=510, null=True, blank=True, verbose_name="Описание картинки (для внутреннего использования)"
    )
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Фотоконтент"
        verbose_name_plural = "Фотоконтент"

    def __str__(self):
        if self.description:
            return self.description[:20]
        return self.image[:20]


# TODO: расширить категории
class VideoContent(models.Model):
    """Видеоконтент школы."""

    class Category(models.TextChoices):
        MASTERCLASS = "masterclass", "Мастер-класс"

    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE, verbose_name="Категория")
    video_path = models.URLField(verbose_name="Ссылка на видео")
    description = models.CharField(
        max_length=510, null=True, blank=True, verbose_name="Описание видео (для внутреннего использования)"
    )
    title = models.CharField(max_length=510, null=True, blank=True, verbose_name="Заголовок")
    category = models.CharField(max_length=255, choices=Category.choices, default=Category.MASTERCLASS)
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Видеоконтент"
        verbose_name_plural = "Видеоконтент"

    def __str__(self):
        if self.description:
            return self.description[:20]
        return self.video_path[:20]


class DocumentContent(models.Model):
    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE, verbose_name="Категория")
    file = models.FileField(upload_to="documents/", verbose_name="Файл")
    description = models.CharField(
        max_length=510, null=True, blank=True, verbose_name="Описание (для внутреннего использования)"
    )
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    def __str__(self):
        return self.file.name[:20] + "..."

    class Meta:
        verbose_name = "Файловый контент"
        verbose_name_plural = "Файловый контент"


class Expert(models.Model):
    """Эксперты и наставники."""

    full_name = models.CharField(max_length=255, verbose_name="ФИО")
    image = models.FileField(upload_to="experts/", verbose_name="Картинка")
    position = models.CharField(max_length=255, verbose_name="Должность")
    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE, null=True, blank=True, verbose_name="Категория")
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)

    def __str__(self):
        return f"Наставник: {self.full_name}"

    class Meta:
        verbose_name = "Наставник"
        verbose_name_plural = "Наставники"
