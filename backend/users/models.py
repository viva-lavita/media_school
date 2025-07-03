from django.contrib.auth.models import AbstractUser
from django.db import models

from users.utils import is_russian


class User(AbstractUser):
    first_name = models.CharField(
        verbose_name="Имя",
        max_length=50,
        validators=[is_russian],
        help_text="Обязательное поле. Не более 50 символов. Только русские буквы.",
    )
    last_name = models.CharField(
        verbose_name="Фамилия",
        max_length=50,
        validators=[is_russian],
        help_text="Обязательное поле. Не более 50 символов. Только русские буквы.",
    )
    patronymic_name = models.CharField(
        verbose_name="Отчество",
        max_length=50,
        validators=[is_russian],
        help_text="Обязательное поле. Не более 50 символов. Только русские буквы.",
    )
    date_of_birth = models.DateField(
        verbose_name="Дата рождения",
        help_text="Обязательное поле.",
    )
    email = models.EmailField(
        verbose_name="Email",
        max_length=254,
        unique=True,
        db_index=True,
        help_text="Обязательное поле. Не более 254 символов. Только буквы, цифры и @/./+/-/_.",
        error_messages={
            "unique": "Пользователь с таким email уже существует.",
            "invalid": "Некорректный email.",
            "max_length": "Email слишком длинный.",
        },
    )
    created_at = models.DateTimeField(
        verbose_name="Дата создания",
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        verbose_name="Дата обновления",
        auto_now=True,
    )

    USERNAME_FIELD = "email"  # переопределение поля для логина
    REQUIRED_FIELDS = ["username"]  # дописать необходимые поля для создания юзера, кроме email и password

    class Meta:
        verbose_name = "Родитель"
        verbose_name_plural = "Родители"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Child(models.Model):
    parent = models.OneToOneField(
        User,
        verbose_name="Родитель",
        on_delete=models.CASCADE,
    )
    first_name = models.CharField(
        verbose_name="Имя",
        max_length=50,
        validators=[is_russian],
        help_text="Обязательное поле. Не более 50 символов. Только русские буквы.",
    )
    last_name = models.CharField(
        verbose_name="Фамилия",
        max_length=50,
        validators=[is_russian],
        help_text="Обязательное поле. Не более 50 символов. Только русские буквы.",
    )
    patronymic_name = models.CharField(
        verbose_name="Отчество",
        max_length=50,
        validators=[is_russian],
        help_text="Обязательное поле. Не более 50 символов. Только русские буквы.",
    )
    date_of_birth = models.DateField(
        verbose_name="Дата рождения",
        help_text="Обязательное поле.",
    )
    school = models.CharField(
        verbose_name="Школа",
        max_length=100,
        help_text="Обязательное поле.",
    )
    classroom = models.CharField(
        verbose_name="Класс",
        max_length=100,
        help_text="Обязательное поле.",
    )
    created_at = models.DateTimeField(
        verbose_name="Дата создания",
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        verbose_name="Дата обновления",
        auto_now=True,
    )

    class Meta:
        verbose_name = "Деталь"
        verbose_name_plural = "Дети"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
