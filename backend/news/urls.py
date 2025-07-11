from django.urls import path
from rest_framework.routers import DefaultRouter

from news.views import news_list

app_name = "news"

router = DefaultRouter()

urlpatterns = [
    path("", news_list, name="news_list"),
    # ...
]
