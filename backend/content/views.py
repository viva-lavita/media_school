from django_filters.rest_framework import DjangoFilterBackend

from api.mixins import RetrieveListViewSet
from content.models import Catalog, DocumentContent, Expert, PhotoContent, VideoContent
from content.serializers import (
    CatalogSerializer,
    DocumentContentSerializer,
    ExpertSerializer,
    PhotoContentSerializer,
    VideoContentSerializer,
)
from content.signal_handlers import auto_delete_file_on_delete  # noqa: F401


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


class ExpertViewSet(RetrieveListViewSet):
    """
    Эксперты и наставники.

    Доступно всем.
    Фильтрация по id категории.

    Для страниц:
     - главной (раздел 'Журналисты и эксперты, которые делятся опытом');
     - о проекте (раздел 'Журналисты и эксперты, которые делятся опытом').
     - каталога материалов (раздел 'Наставники', фильтр по id категории).
    """

    queryset = Expert.objects.all().order_by("id")
    serializer_class = ExpertSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ("catalog",)
