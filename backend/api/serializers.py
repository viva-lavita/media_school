from rest_framework import serializers

from api.models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            "address",
            "phone_number",
            "contact_email",
            "school_website",
            "school_photo",
            "social_vk",
            "social_ok",
            "latitude",
            "longitude",
        ]
