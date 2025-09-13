from rest_framework.routers import DefaultRouter

from content.views import (
    CatalogViewSet,
    DocumentContentViewSet,
    ExpertViewSet,
    PhotoContentViewSet,
    VideoContentViewSet,
)

app_name = "content"


router = DefaultRouter()
router.register("catalog", CatalogViewSet, basename="catalog")
router.register("document", DocumentContentViewSet, basename="document")
router.register("photo", PhotoContentViewSet, basename="photo")
router.register("video", VideoContentViewSet, basename="video")
router.register("expert", ExpertViewSet, basename="expert")

urlpatterns = router.urls
