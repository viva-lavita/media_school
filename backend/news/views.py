from api.mixins import RetrieveListViewSet
from api.permissions import IsStuffOrReadOnly
from news.models import News
from news.serializers import NewsSerializer, ShortNewsSerializer


class NewsViewSet(RetrieveListViewSet):
    """
    Новости.

    Доступно всем.

    В list - краткая версия.
    В detail - полная версия сразу с параграфами новости,
    отсортированными по порядку отображения.
    В параграфах новости пустые поля не отображаются.
    """

    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (IsStuffOrReadOnly,)

    def get_queryset(self):
        return self.queryset.filter(is_published=True)

    def get_serializer_class(self):
        if self.action == "list":
            return ShortNewsSerializer
        return super().get_serializer_class()
