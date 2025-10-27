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
    Фильтрация по id категории.
    """

    queryset = PhotoContent.objects.select_related("category").all()
    serializer_class = PhotoContentSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ("catalog",)


class VideoContentViewSet(RetrieveListViewSet):
    """
    Эндпоинты для работы с видео по категориям.

    Доступно всем.
    Фильтрация по id категории.
    """

    queryset = VideoContent.objects.select_related("category").all()
    serializer_class = VideoContentSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ("catalog",)


class DocumentContentViewSet(RetrieveListViewSet):
    """
    Эндпоинты для работы с документами по категориям.

    Доступно всем.
    Фильтрация по id категории.
    """

    queryset = DocumentContent.objects.all()
    serializer_class = DocumentContentSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ("catalog",)


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
