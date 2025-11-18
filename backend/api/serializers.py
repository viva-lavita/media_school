from rest_framework import serializers

from api.models import Contact, LegalDocuments, Review


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


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            "id",
            "full_name",
            "age",
            "image",
            "review",
            "created_at",
        ]


class LegalDocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalDocuments
        fields = [
            "privacy_policy",
            "user_agreement",
        ]
