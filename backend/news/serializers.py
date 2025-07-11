from rest_framework import serializers

from api.utils import is_russian
from news.models import Comment, ContentBlock, News, Question


class CommentBlockSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()  # <- имя автора вместо id

    class Meta:
        model = Comment
        fields = ["id", "author", "text", "created_at", "is_approved"]


class QuestionBlockSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()  # <- имя автора вместо id
    comments = CommentBlockSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ["id", "author", "category", "text", "created_at", "is_approved", "comments"]


class ContentBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentBlock
        fields = ["id", "type", "title", "content_text", "content_image", "order"]


class NewsSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()  # <- имя автора вместо id
    content_blocks = ContentBlockSerializer(many=True, read_only=True)
    questions = QuestionBlockSerializer(many=True, read_only=True)

    class Meta:
        model = News
        fields = [
            "id",
            "title",
            "slug",
            "category",
            "author",
            "preview_text",
            "preview_image",
            "created_at",
            "is_published",
            "content_blocks",
            "questions",
        ]

    def validate_title(self, value):
        if not value:
            raise serializers.ValidationError("Заголовок не может быть пустым")
        if not is_russian(value):
            raise serializers.ValidationError("Заголовок должен быть только из русских букв")
        return value
