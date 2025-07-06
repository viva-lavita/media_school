import os

from django.conf import settings
from django.contrib.auth import get_user_model
from djoser.email import PasswordResetEmail

User = get_user_model()


class CustomPasswordResetEmail(PasswordResetEmail):
    template_name = os.path.join(settings.BASE_DIR, "templates", "email", "password_reset.html")
