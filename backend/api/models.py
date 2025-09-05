from django.db import models


class Contact(models.Model):
    """
    Модель для хранения контактной информации школы.
    Используется для раздела 'Контакты' и для футера сайта.
    """

    address = models.CharField(verbose_name="Адрес", max_length=255, blank=True, null=True)
    phone_number = models.CharField(verbose_name="Телефон", max_length=20, blank=True, null=True)
    contact_email = models.EmailField(verbose_name="Электронная почта", max_length=255, blank=True, null=True)
    school_website = models.URLField(verbose_name="Сайт школы", max_length=255, blank=True, null=True)
    school_photo = models.URLField(verbose_name="Ссылка на фото школы", max_length=255, blank=True, null=True)
    social_vk = models.URLField(verbose_name="Ссылка на ВК", max_length=255, blank=True, null=True)
    social_ok = models.URLField(verbose_name="Ссылка на ОК", max_length=255, blank=True, null=True)
    latitude = models.FloatField(verbose_name="Широта", blank=True, null=True)
    longitude = models.FloatField(verbose_name="Долгота", blank=True, null=True)
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="Дата изменения", auto_now=True)

    def __str__(self):
        return f"Contacts: {self.address}"

    class Meta:
        verbose_name = "Контакт"
        verbose_name_plural = "Контакты"


class Review(models.Model):
    """
    Отзывы о проекте.
    """

    full_name = models.CharField(verbose_name="ФИО", max_length=255)
    age = models.PositiveIntegerField(verbose_name="Возраст", blank=True, null=True)
    image = models.URLField(verbose_name="Ссылка на картинку", blank=True, null=True)
    review = models.TextField(verbose_name="Отзыв")
    created_at = models.DateTimeField(verbose_name="Дата создания", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="Дата изменения", auto_now=True)

    def __str__(self):
        return f"Отзыв: {self.full_name}"

    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"
        ordering = ["-created_at", "-updated_at"]
