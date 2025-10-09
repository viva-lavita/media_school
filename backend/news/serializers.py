from rest_framework import serializers

from news.models import Announcement, Answer, Comment, Competition, News, Paragraph
from users.serializers import ShortReadUserSerializer


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
            "image",
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
            "image",
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
            "image",
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
            "image",
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
            "image",
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
            "image",
            "start_date",
            "end_date",
            "created_at",
        )


class AnswerSerializer(serializers.ModelSerializer):
    """Сериализатор ответов."""

    author = ShortReadUserSerializer()

    class Meta:
        model = Answer
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    """Сериализатор комментариев."""

    answers = AnswerSerializer(many=True)
    author = ShortReadUserSerializer()

    class Meta:
        model = Comment
        fields = (
            "id",
            "news",
            "announcement",
            "competition",
            "author",
            "question_category",
            "text",
            "created_at",
            "answers",
        )

    def to_representation(self, instance):
        """Только не пустые поля."""
        representation = super().to_representation(instance)
        representation = {k: v for k, v in representation.items() if v}
        return representation


class ShortCommentSerializer(serializers.ModelSerializer):
    """Сериализатор комментариев, сокращенный вывод."""

    author = ShortReadUserSerializer()

    class Meta:
        model = Comment
        fields = (
            "id",
            "news",
            "announcement",
            "competition",
            "author",
            "question_category",
            "text",
            "created_at",
        )

    def to_representation(self, instance):
        """Только не пустые поля."""
        representation = super().to_representation(instance)
        representation = {k: v for k, v in representation.items() if v}
        return representation


class CreateCommentSerializer(serializers.ModelSerializer):
    """Сериализатор комментариев для создания."""

    class Meta:
        model = Comment
        fields = (
            "id",
            "news",
            "announcement",
            "competition",
            "question_category",
            "text",
            "created_at",
        )

    def to_representation(self, instance):
        """Только не пустые поля."""
        representation = super().to_representation(instance)
        representation = {k: v for k, v in representation.items() if v}
        return representation
