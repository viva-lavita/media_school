from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet


class RetrieveUpdateViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, GenericViewSet):
    """Миксин только для чтения и обновления экземпляра."""

    pass


class RetrieveListViewSet(mixins.RetrieveModelMixin, mixins.ListModelMixin, GenericViewSet):
    """Миксин только для чтения и получения списка экземпляров."""

    pass
