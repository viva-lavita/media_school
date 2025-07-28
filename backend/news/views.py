from api.mixins import RetrieveListViewSet
from api.permissions import IsStuffOrReadOnly
from news.models import News
from news.serializers import NewsSerializer


class NewsViewSet(RetrieveListViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (IsStuffOrReadOnly,)

    def get_queryset(self):
        return self.queryset.filter(is_published=True)
