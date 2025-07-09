from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import get_contact, health_check

app_name = "api"


router = DefaultRouter()

urlpatterns = [
    path("", include(router.urls)),
    path("", include("users.urls")),
    path("utils/health-check/", health_check, name="health-check"),
    path("contacts/", get_contact, name="contacts"),
    path("content/", include("content.urls")),
]
