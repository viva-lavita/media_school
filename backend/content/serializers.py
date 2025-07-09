from rest_framework import serializers

from content.models import Catalog, DocumentContent, PhotoContent, VideoContent


class CatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = "__all__"


class PhotoContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoContent
        fields = (
            "id",
            "catalog_id",
            "image_path",
        )


class VideoContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoContent
        fields = (
            "id",
            "catalog_id",
            "video_path",
        )


class DocumentContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentContent
        fields = (
            "id",
            "catalog_id",
            "document_path",
        )
