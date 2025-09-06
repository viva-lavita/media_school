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
router.register("catalogs", CatalogViewSet, basename="catalog")
router.register("documents", DocumentContentViewSet, basename="document")
router.register("photos", PhotoContentViewSet, basename="photo")
router.register("videos", VideoContentViewSet, basename="video")
router.register("experts", ExpertViewSet, basename="expert")

urlpatterns = router.urls
