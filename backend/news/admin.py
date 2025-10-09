from django.conf import settings
from django.contrib import admin
from django.contrib.admin.sites import AdminSite

from api.constants import ADMIN_TEXT_LEN
from news.models import (
    Announcement,
    Answer,
    Comment,
    Competition,
    News,
    Paragraph,
)

AdminSite.empty_value_display = "-"


class ParagraphInlineNews(admin.StackedInline):
    model = Paragraph
    extra = 2
    exclude = ("announcement", "competition")


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    exclude = ("created_by",)
    list_display = (
        "id",
        "is_published",
        "short_title",
        "short_description",
        "last_editor",
        "author_admin",
        "created_at",
    )
    search_fields = ("title", "description", "author__first_name", "author__last_name")
    list_filter = ("is_published",)
    show_facets = admin.ShowFacets.ALWAYS
    empty_value_display = "-"
    inlines = [ParagraphInlineNews]
    date_hierarchy = "created_at"
    actions = ("publish", "unpublish")

    @admin.action(description="Опубликовать")
    def publish(self, request, queryset):
        queryset.update(is_published=True)

    @admin.action(description="Снять с публикации")
    def unpublish(self, request, queryset):
        queryset.update(is_published=False)

    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
            return super().save_model(request, obj, form, change)
        obj.updated_by = request.user
        return super().save_model(request, obj, form, change)

    @admin.display(description="Описание")
    def short_description(self, obj):
        if obj.description:
            if len(obj.description) <= ADMIN_TEXT_LEN:
                return obj.description
            return obj.description[:ADMIN_TEXT_LEN] + "..."
        return AdminSite.empty_value_display

    @admin.display(description="Заголовок")
    def short_title(self, obj):
        if len(obj.title) <= ADMIN_TEXT_LEN:
            return obj.title
        return obj.title[:ADMIN_TEXT_LEN]

    @admin.display(description="Автор-админ")
    def author_admin(self, obj):
        return obj.author.get_full_name()

    @admin.display(description="Последний редактор")
    def last_editor(self, obj):
        if not obj.updated_by:
            return "-"
        return obj.updated_by.get_full_name()


class ParagraphInlineAnnouncement(admin.StackedInline):
    model = Paragraph
    extra = 2
    exclude = ("news", "competition")


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    exclude = ("created_by",)
    list_display = (
        "id",
        "is_published",
        "short_title",
        "short_description",
        "last_editor",
        "author_admin",
        "created_at",
    )
    search_fields = ("title", "description", "author__first_name", "author__last_name")
    list_filter = ("is_published",)
    show_facets = admin.ShowFacets.ALWAYS
    empty_value_display = "-"
    inlines = [ParagraphInlineAnnouncement]
    date_hierarchy = "created_at"
    actions = ("publish", "unpublish")

    @admin.action(description="Опубликовать")
    def publish(self, request, queryset):
        queryset.update(is_published=True)

    @admin.action(description="Снять с публикации")
    def unpublish(self, request, queryset):
        queryset.update(is_published=False)

    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
            return super().save_model(request, obj, form, change)
        obj.updated_by = request.user
        return super().save_model(request, obj, form, change)

    @admin.display(description="Описание")
    def short_description(self, obj):
        if obj.description:
            if len(obj.description) <= ADMIN_TEXT_LEN:
                return obj.description
            return obj.description[:ADMIN_TEXT_LEN] + "..."
        return AdminSite.empty_value_display

    @admin.display(description="Заголовок")
    def short_title(self, obj):
        if len(obj.title) <= ADMIN_TEXT_LEN:
            return obj.title
        return obj.title[:ADMIN_TEXT_LEN] + "..."

    @admin.display(description="Автор-админ")
    def author_admin(self, obj):
        return obj.author.get_full_name()

    @admin.display(description="Последний редактор")
    def last_editor(self, obj):
        if not obj.updated_by:
            return "-"
        return obj.updated_by.get_full_name()


class ParagraphInlineCompetition(admin.StackedInline):
    model = Paragraph
    extra = 2
    exclude = ("news", "announcement")


@admin.register(Competition)
class CompetitionAdmin(admin.ModelAdmin):
    exclude = ("created_by",)
    list_display = (
        "id",
        "is_published",
        "start_date",
        "end_date",
        "short_title",
        "short_description",
        "last_editor",
        "author_admin",
        "created_at",
    )
    search_fields = ("title", "description", "author__first_name", "author__last_name")
    list_filter = ("is_published",)
    show_facets = admin.ShowFacets.ALWAYS
    empty_value_display = "-"
    inlines = [ParagraphInlineCompetition]
    date_hierarchy = "created_at"
    actions = ("publish", "unpublish")

    @admin.action(description="Опубликовать")
    def publish(self, request, queryset):
        queryset.update(is_published=True)

    @admin.action(description="Снять с публикации")
    def unpublish(self, request, queryset):
        queryset.update(is_published=False)

    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
            return super().save_model(request, obj, form, change)
        obj.updated_by = request.user
        return super().save_model(request, obj, form, change)

    @admin.display(description="Описание")
    def short_description(self, obj):
        if len(obj.description) <= ADMIN_TEXT_LEN:
            return obj.description
        return obj.description[:ADMIN_TEXT_LEN] + "..."

    @admin.display(description="Заголовок")
    def short_title(self, obj):
        if len(obj.title) <= ADMIN_TEXT_LEN:
            return obj.title
        return obj.title[:ADMIN_TEXT_LEN]

    @admin.display(description="Автор-админ")
    def author_admin(self, obj):
        return obj.author.get_full_name()

    @admin.display(description="Последний редактор")
    def last_editor(self, obj):
        if not obj.updated_by:
            return "-"
        return obj.updated_by.get_full_name()


if settings.DEBUG:

    @admin.register(Paragraph)
    class ParagraphAdmin(admin.ModelAdmin):
        list_display = ("id", "news", "announcement", "competition", "created_at")
        show_facets = admin.ShowFacets.ALWAYS
        date_hierarchy = "created_at"


class AnswerInline(admin.StackedInline):
    model = Answer
    extra = 1


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "is_approved",
        "count_answers",
        "news",
        "announcement",
        "competition",
        "author",
        "question_category",
        "short_text",
        "created_at",
    )
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"
    list_filter = ("is_approved", "question_category")
    inlines = [AnswerInline]
    actions = ["approve", "disapprove"]

    @admin.display(description="Количество ответов")
    def count_answers(self, obj):
        return obj.answers.count()

    @admin.display(description="Текст")
    def short_text(self, obj):
        if len(obj.text) <= ADMIN_TEXT_LEN:
            return obj.text
        return obj.text[:ADMIN_TEXT_LEN] + "..."

    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
            return super().save_model(request, obj, form, change)
        return super().save_model(request, obj, form, change)

    @admin.action(description="Одобрить")
    def approve(self, request, queryset):
        queryset.update(is_approved=True)

    @admin.action(description="Отклонить")
    def disapprove(self, request, queryset):
        queryset.update(is_approved=False)


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ("id", "comment", "author", "short_text", "created_at")
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"

    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
            return super().save_model(request, obj, form, change)
        return super().save_model(request, obj, form, change)

    @admin.display(description="Текст")
    def short_text(self, obj):
        if len(obj.text) <= ADMIN_TEXT_LEN:
            return obj.text
        return obj.text[:ADMIN_TEXT_LEN] + "..."
