from django.db.models import Q
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from api.mixins import ListCreateRetrieveViewSet, RetrieveListViewSet
from api.permissions import IsStuffOrReadOnly
from news.filters import CommentFilter, CompetitionFilter
from news.models import Announcement, Comment, Competition, News
from news.serializers import (
    AnnouncementSerializer,
    CommentSerializer,
    CompetitionSerializer,
    CreateCommentSerializer,
    NewsSerializer,
    ShortAnnouncementSerializer,
    ShortCompetitionSerializer,
    ShortNewsSerializer,
)
from news.signals_handlers import auto_delete_file_on_delete  # noqa: F401


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
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering_fields = ("created_at",)
    search_fields = (
        "title",
        "description",
        "author__first_name",
        "author__last_name",
        "paragraphs__text",
        "paragraphs__title",
    )

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


# 1. Пользователь должен получить все комментарии с флагом is_published=True
# 2. А также свои комментарии, если он автор
# 3. Должен иметь возможность создать комментарии к новостям, анонсам и конкурсам
# 4. Эндпоинты:
#    - получить все комментарии для страницы вопрос-ответ,
#    - комментарии только к новости, анонсу или конкурсу, (фильтр с категорией и id),
#    - создать комментарии,
#    - один комментарий с ответами. Ретрив


class CommentViewSet(ListCreateRetrieveViewSet):
    """
    Комментарии к новостям, анонсам и конкурсам.

    Создание комментариев доступно только авторизованным пользователям.
    При создании комментария к новости, анонсу или конкурсу указывается
    ключ ('news', 'announcement', 'competition') и
    значение (id новости, анонса или конкурса).
    При создании комментария в разделе вопрос-ответ, не нужно указывать ключ.

    Пользователь получает все одобренные администратором комментарии,
    а также свои комментарии, если он автор.

    Фильтром можно получить комментарии к конкретной новости, анонсу или конкурсу.
    Ключи фильтра: "news", "announcement", "competition".
    Значения фильтра - id новости, анонса или конкурса.
    Можно использовать только один фильтр этого типа.
    Для раздела вопрос-ответ фильтры не нужны, там выводятся все комментарии.

    Элементы выводятся от более свежих к более старым по дефолту,
    но также доступна сортировка по полю created_at.
    Например '?ordering=-created_at' - от свежих к старым,
    '?ordering=created_at' - от старых к свежим.
    """

    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (
        DjangoFilterBackend,
        filters.OrderingFilter,
    )
    filterset_class = CommentFilter
    ordering_fields = ("created_at",)

    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Comment.objects.filter(is_approved=True)
        return Comment.objects.filter(Q(author=self.request.user) | Q(is_approved=True))

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_serializer_class(self):
        if self.action == "create":
            return CreateCommentSerializer
        return super().get_serializer_class()
