from rest_framework.routers import DefaultRouter

from news.views import AnnouncementViewSet, CompetitionViewSet, NewsViewSet

app_name = "news"

router = DefaultRouter()

router.register("news", NewsViewSet, basename="news")
router.register("announcement", AnnouncementViewSet, basename="announcement")
router.register("competition", CompetitionViewSet, basename="competition")

urlpatterns = router.urls
