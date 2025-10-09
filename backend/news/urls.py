from rest_framework.routers import DefaultRouter

from news.views import AnnouncementViewSet, CommentViewSet, CompetitionViewSet, NewsViewSet

app_name = "news"

router = DefaultRouter()

router.register("news", NewsViewSet, basename="news")
router.register("announcements", AnnouncementViewSet, basename="announcement")
router.register("competitions", CompetitionViewSet, basename="competition")
router.register("comments", CommentViewSet, basename="comment")

urlpatterns = router.urls
