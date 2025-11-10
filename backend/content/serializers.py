from rest_framework import serializers

from content.models import Catalog, ContentCategory, DocumentContent, Expert, Photo, PhotoContent, VideoContent


class CatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = "__all__"


class ContentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentCategory
        fields = "__all__"


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = (
            "id",
            "image",
        )


class PhotoContentSerializer(serializers.ModelSerializer):
    images = PhotoSerializer(many=True)
    category = ContentCategorySerializer()

    class Meta:
        model = PhotoContent
        fields = (
            "id",
            "catalog_id",
            "images",
            "title",
            "category",
            "created_at",
        )


class VideoContentSerializer(serializers.ModelSerializer):
    category = ContentCategorySerializer()

    class Meta:
        model = VideoContent
        fields = (
            "id",
            "catalog_id",
            "video_path",
            "title",
            "category",
            "created_at",
        )


class DocumentContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentContent
        fields = (
            "id",
            "catalog_id",
            "file",
            "description",
            "created_at",
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
