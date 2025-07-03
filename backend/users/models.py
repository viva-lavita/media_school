from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    first_name = models.CharField(
        verbose_name="Имя",
        max_length=50,
        blank=True,
        null=True,
        help_text="Не более 50 символов.",
    )
    last_name = models.CharField(
        verbose_name="Фамилия",
        max_length=50,
        blank=True,
        null=True,
        help_text="Не более 50 символов.",
    )
    patronymic_name = models.CharField(
        verbose_name="Отчество",
        max_length=50,
        blank=True,
        null=True,
        help_text=" более 50 символов.",
    )
    date_of_birth = models.DateField(
        blank=True,
        null=True,
        verbose_name="Дата рождения",
    )
    email = models.EmailField(
        verbose_name="Email",
        max_length=254,
        unique=True,
        db_index=True,
        help_text="Не более 254 символов. Только буквы, цифры и @/./+/-/_.",
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
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    @property
    def username(self):
        return self.get_username()

    class Meta:
        verbose_name = "Родитель"
        verbose_name_plural = "Родители"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Child(models.Model):
    parent = models.OneToOneField(
        User,
        related_name="child",
        verbose_name="Родитель",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    first_name = models.CharField(
        verbose_name="Имя",
        max_length=50,
        help_text="Обязательное поле. Не более 50 символов.",
    )
    last_name = models.CharField(
        verbose_name="Фамилия",
        max_length=50,
        help_text="Обязательное поле. Не более 50 символов.",
    )
    patronymic_name = models.CharField(
        verbose_name="Отчество",
        max_length=50,
        help_text="Обязательное поле. Не более 50 символов.",
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
