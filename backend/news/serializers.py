from rest_framework import serializers

from news.models import News, Paragraph


class ParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = (
            "id",
            "title",
            "text",
            "image",
            "link_text",
            "link_url",
        )

    def to_representation(self, instance):
        """Только не пустые поля."""
        representation = super().to_representation(instance)
        representation = {k: v for k, v in representation.items() if v}
        return representation


class NewsSerializer(serializers.ModelSerializer):
    paragraphs = ParagraphSerializer(many=True)

    class Meta:
        model = News
        fields = (
            "id",
            "title",
            "description",
            "image_path",
            "author_for_display",
            "created_at",
            "paragraphs",
        )


class ShortNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = (
            "id",
            "title",
            "description",
            "image_path",
            "created_at",
        )
