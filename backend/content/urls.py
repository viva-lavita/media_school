from rest_framework.routers import DefaultRouter

from content.views import CatalogViewSet, DocumentContentViewSet, PhotoContentViewSet, VideoContentViewSet

app_name = "content"


router = DefaultRouter()
router.register("catalog", CatalogViewSet, basename="catalog")
router.register("document", DocumentContentViewSet, basename="document")
router.register("photo", PhotoContentViewSet, basename="photo")
router.register("video", VideoContentViewSet, basename="video")

urlpatterns = router.urls
