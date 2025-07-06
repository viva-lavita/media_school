from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Contact
from api.serializers import ContactSerializer


@extend_schema(responses={status.HTTP_200_OK: None}, request=None)
@api_view(["GET"])
def health_check(request):
    return Response(status=status.HTTP_200_OK)

@api_view(['GET'])
def get_contact(request):
    instance = Contact.objects.last()

    if not instance:
        return Response({"error": "Контакты не найдены"}, status=status.HTTP_404_NOT_FOUND)

    serializer = ContactSerializer(instance)

    return Response(serializer.data, status=status.HTTP_200_OK)
