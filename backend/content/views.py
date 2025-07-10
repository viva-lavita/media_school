from api.mixins import RetrieveListViewSet
from content.models import Catalog, DocumentContent, PhotoContent, VideoContent
from content.serializers import (
    CatalogSerializer,
    DocumentContentSerializer,
    PhotoContentSerializer,
    VideoContentSerializer,
)


# TODO: Расширить после новостей, анонсов и конкурсов.
# TODO: Добавить пагинацию
class CatalogViewSet(RetrieveListViewSet):
    """
    Эндпоинты для работы с категориями.

    Доступно всем.
    """

    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer


class PhotoContentViewSet(RetrieveListViewSet):
    """
    Эндпоинты для работы с фотографиями по категориям.

    Доступно всем.
    """

    queryset = PhotoContent.objects.all()
    serializer_class = PhotoContentSerializer


class VideoContentViewSet(RetrieveListViewSet):
    """
    Эндпоинты для работы с видео по категориям.

    Доступно всем.
    """

    queryset = VideoContent.objects.all()
    serializer_class = VideoContentSerializer


class DocumentContentViewSet(RetrieveListViewSet):
    """
    Эндпоинты для работы с документами по категориям.

    Доступно всем.
    """

    queryset = DocumentContent.objects.all()
    serializer_class = DocumentContentSerializer
