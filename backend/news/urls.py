from rest_framework.routers import DefaultRouter

from news.views import NewsViewSet

app_name = "news"

router = DefaultRouter()

router.register("news", NewsViewSet, basename="news")

urlpatterns = router.urls
