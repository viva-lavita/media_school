from django.db import models


class Contact(models.Model):

    address = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Адрес"
    )

    phone_number = models.CharField(
        max_length=20,
        blank=True,
        null=True,
        verbose_name="Телефон"
    )

    contact_email = models.EmailField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Электронная почта"
    )

    school_website = models.URLField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Сайт школы"
    )

    school_photo = models.CharField(
        blank=True,
        null=True,
        verbose_name="Ссылка на фото школы"
    )

    social_vk = models.URLField(
        blank=True,
        null=True,
        verbose_name="Ссылка на ВК"
    )

    social_ok = models.URLField(
        blank=True,
        null=True,
        verbose_name="Ссылка на ОК"
    )

    latitude = models.FloatField(
        blank=True,
        null=True,
        verbose_name="Широта"
    )

    longitude = models.FloatField(
        blank=True,
        null=True,
        verbose_name="Долгота"
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Дата создания"
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Дата изменения"
    )

    def __str__(self):
        return f"Contacts: {self.address}"

    class Meta:
        verbose_name = "Контакт"
        verbose_name_plural = "Контакты"
