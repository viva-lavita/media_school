from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet


class RetrieveUpdateViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, GenericViewSet):
    """Миксин только для чтения и обновления экземпляра."""

    pass
