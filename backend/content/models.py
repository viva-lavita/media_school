from django.db import models


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
