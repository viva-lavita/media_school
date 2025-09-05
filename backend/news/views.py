from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

from api.mixins import RetrieveListViewSet
from api.permissions import IsStuffOrReadOnly
from news.filters import CompetitionFilter
from news.models import Announcement, Competition, News
from news.serializers import (
    AnnouncementSerializer,
    CompetitionSerializer,
    NewsSerializer,
    ShortAnnouncementSerializer,
    ShortCompetitionSerializer,
    ShortNewsSerializer,
)


class NewsViewSet(RetrieveListViewSet):
    """
    Новости.

    Доступно всем.

    В list - краткая версия. Элементы выводятся от более свежих к более старым.
    Также доступна сортировка по полю created_at (-created_at для обратной сортировки).
    В detail - полная версия сразу с параграфами новости,
    отсортированными по порядку отображения.
    В параграфах новости пустые поля не отображаются.
    """

    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (IsStuffOrReadOnly,)
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ("created_at",)

    def get_queryset(self):
        return self.queryset.filter(is_published=True)

    def get_serializer_class(self):
        if self.action == "list":
            return ShortNewsSerializer
        return super().get_serializer_class()


class AnnouncementViewSet(RetrieveListViewSet):
    """
    Анонсы.

    Доступно всем.

    В list - краткая версия. Элементы выводятся от более свежих к более старым.
    Также доступна сортировка по полю created_at (-created_at для обратной сортировки).
    В detail - полная версия сразу с параграфами анонса,
    отсортированными по порядку отображения.
    В параграфах анонса пустые поля не отображаются.
    """

    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = (IsStuffOrReadOnly,)
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ("created_at",)

    def get_queryset(self):
        return self.queryset.filter(is_published=True)

    def get_serializer_class(self):
        if self.action == "list":
            return ShortAnnouncementSerializer
        return super().get_serializer_class()


class CompetitionViewSet(RetrieveListViewSet):
    """
    Конкурсы.

    Доступно всем.

    В list - краткая версия. Элементы выводятся от более свежих к более старым.
    Также доступна сортировка по полям created_at, start_date и end_date (- для обратной сортировки).
    В detail - полная версия сразу с параграфами конкурса,
    отсортированными по порядку отображения.
    В параграфах конкурса пустые поля не отображаются.

    Выдачу можно фильтровать по датам начала и окончания конкурса, а также по флагу is_active.
    """

    queryset = Competition.objects.all()
    serializer_class = CompetitionSerializer
    filter_backends = (
        DjangoFilterBackend,
        filters.OrderingFilter,
    )
    filterset_class = CompetitionFilter
    ordering_fields = ("start_date", "end_date", "created_at")

    def get_queryset(self):
        return self.queryset.filter(is_published=True)

    def get_serializer_class(self):
        if self.action == "list":
            return ShortCompetitionSerializer
        return super().get_serializer_class()
