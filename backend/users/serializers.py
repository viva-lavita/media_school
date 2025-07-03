from django.contrib.auth import get_user_model
from djoser.serializers import UserCreatePasswordRetypeSerializer as DjoserUserCreateSerializer
from djoser.serializers import UserSerializer as DjoserUserSerializer
from rest_framework import serializers

from users.models import Child

User = get_user_model()


class ChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ["pk", "first_name", "last_name", "patronymic_name", "date_of_birth", "school", "classroom"]

    def validate_first_name(self, value):
        if not self.is_russian(value):
            raise serializers.ValidationError("Имя должно состоять только из русских букв")
        return value

    def validate_last_name(self, value):
        if not self.is_russian(value):
            raise serializers.ValidationError("Фамилия должна состоять только из русских букв")
        return value

    def validate_patronymic_name(self, value):
        if not self.is_russian(value):
            raise serializers.ValidationError("Отчество должно состоять только из русских букв")
        return value

    def is_russian(self, s):
        russian_alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
        allowed_chars = russian_alphabet + "-' "
        return all(c.lower() in allowed_chars or c.isspace() for c in s)


class UserSerializer(DjoserUserSerializer):
    """
    Базовый сериализатор пользователя для всех action кроме 'create'.

    Выводится максимальная информация о пользователе.
    При редактировании пользователя проверяется уникальность новых email и
    username, если эти поля будут изменены.
    """

    child = ChildSerializer(read_only=True)

    class Meta:
        model = User
        fields = ["pk", "email", "first_name", "last_name", "patronymic_name", "date_of_birth", "child"]


class UserCreateSerializer(DjoserUserCreateSerializer):
    """
    Сериализатор создания пользователя.
    """

    password = serializers.CharField(write_only=True)
    re_password = serializers.CharField(write_only=True)
    child = serializers.PrimaryKeyRelatedField(queryset=Child.objects.all())

    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "password",
            "re_password",
            "first_name",
            "last_name",
            "patronymic_name",
            "date_of_birth",
            "child",
        )

    def validate_first_name(self, value):
        if not self.is_russian(value):
            raise serializers.ValidationError("Имя должно состоять только из русских букв")
        return value

    def validate_last_name(self, value):
        if not self.is_russian(value):
            raise serializers.ValidationError("Фамилия должна состоять только из русских букв")
        return value

    def validate_patronymic_name(self, value):
        if not self.is_russian(value):
            raise serializers.ValidationError("Отчество должно состоять только из русских букв")
        return value

    def is_russian(self, s):
        russian_alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
        allowed_chars = russian_alphabet + "-' "
        return all(c.lower() in allowed_chars or c.isspace() for c in s)


class ShortReadUserSerializer(serializers.ModelSerializer):
    child = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = User
        fields = ("id", "email", "child")


class UserDeleteSerializer(serializers.Serializer):
    """
    Сериализатор удаления пользователя.

    Переопределено, т.к. Djoser по дефолту просит текущий пароль
    в теле запроса, что не поддерживается (и не одобряется) OpenAPI.
    """

    pass
