from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from news.serializers import NewsSerializer


@extend_schema(responses={status.HTTP_200_OK: None}, request=None)
@api_view(["GET"])
def health_check(request):
    return Response(status=status.HTTP_200_OK)


@extend_schema(responses={status.HTTP_200_OK: NewsSerializer})
@api_view(["GET"])
def news_list(request):
    pass
