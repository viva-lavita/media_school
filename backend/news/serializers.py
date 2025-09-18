from rest_framework import serializers

from news.models import Announcement, Competition, News, Paragraph


class ParagraphSerializer(serializers.ModelSerializer):
    """Сериализатор параграфов новости, анонса, конкурса."""

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
    """Сериализатор новостей."""

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
    """Сериализатор новостей, сокращенный вывод."""

    class Meta:
        model = News
        fields = (
            "id",
            "title",
            "description",
            "image_path",
            "created_at",
        )


class AnnouncementSerializer(serializers.ModelSerializer):
    """Сериализатор анонсов."""

    paragraphs = ParagraphSerializer(many=True)

    class Meta:
        model = Announcement
        fields = (
            "id",
            "title",
            "description",
            "image_path",
            "author_for_display",
            "created_at",
            "paragraphs",
        )


class ShortAnnouncementSerializer(serializers.ModelSerializer):
    """Сериализатор анонсов, сокращенный вывод."""

    class Meta:
        model = Announcement
        fields = (
            "id",
            "title",
            "description",
            "image_path",
            "created_at",
        )


class CompetitionSerializer(serializers.ModelSerializer):
    """Сериализатор конкурсов."""

    paragraphs = ParagraphSerializer(many=True)

    class Meta:
        model = Competition
        fields = (
            "id",
            "title",
            "description",
            "image_path",
            "author_for_display",
            "start_date",
            "end_date",
            "created_at",
            "paragraphs",
        )


class ShortCompetitionSerializer(serializers.ModelSerializer):
    """Сериализатор конкурсов, сокращенный вывод."""

    class Meta:
        model = Competition
        fields = (
            "id",
            "title",
            "description",
            "image_path",
            "start_date",
            "end_date",
            "created_at",
        )
