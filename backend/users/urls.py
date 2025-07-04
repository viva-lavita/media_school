from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ChildViewSet, UserViewSet

app_name = "users"


router = DefaultRouter()
router.register("users", UserViewSet, basename="users")
router.register("child", ChildViewSet, basename="children")


urlpatterns = [
    path("", include(router.urls)),
    path("", include("djoser.urls.jwt")),
]
