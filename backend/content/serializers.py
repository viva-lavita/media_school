from rest_framework import serializers

from content.models import Catalog, DocumentContent, Expert, PhotoContent, VideoContent


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
            "image",
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
            "file",
        )


class ExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = (
            "id",
            "full_name",
            "image",
            "position",
            "catalog_id",
        )
