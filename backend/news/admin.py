from django.contrib import admin

from news.models import Comment, ContentBlock, News, Question


class ContentBlockInline(admin.TabularInline):
    model = ContentBlock
    extra = 1
    fields = ("type", "title", "content_text", "content_image", "order")
    verbose_name = "Блок контента"
    verbose_name_plural = "Блоки контента"


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0
    fields = ("author", "text", "is_approved", "created_at")
    readonly_fields = ("created_at",)
    verbose_name = "Комментарий"
    verbose_name_plural = "Комментарии"


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 0
    fields = ("category", "author", "text", "is_approved", "created_at")
    readonly_fields = ("created_at",)
    verbose_name = "Вопрос"
    verbose_name_plural = "Вопросы"


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "is_published", "created_at")
    list_filter = ("category", "is_published")
    search_fields = ("title",)
    readonly_fields = ("created_at", "updated_at")
    inlines = [ContentBlockInline, QuestionInline]
    show_facets = admin.ShowFacets.ALWAYS
    fieldsets = (
        (None, {"fields": ("title", "slug", "category")}),
        ("Контент", {"fields": ("preview_text", "preview_image")}),
        ("Статус", {"fields": ("author", "is_published")}),
        ("Даты", {"fields": ("created_at", "updated_at")}),
    )


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("text", "category", "news", "author", "is_approved", "created_at")
    list_filter = ("category", "is_approved")
    search_fields = ("text",)
    readonly_fields = ("created_at",)
    inlines = [CommentInline]
    show_facets = admin.ShowFacets.ALWAYS
    actions = ["approve_items"]  # <- массовое одобрение
    fieldsets = (
        (None, {"fields": ("news", "category", "author")}),
        ("Текст", {"fields": ("text",)}),
        ("Статус", {"fields": ("is_approved", "created_at")}),
    )

    def approve_items(self, request, queryset):
        queryset.update(is_approved=True)

    approve_items.short_description = "Одобрить выбранные вопросы"


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("text", "question", "author", "is_approved", "created_at")
    list_filter = ("is_approved",)
    search_fields = ("text",)
    readonly_fields = ("created_at",)
    show_facets = admin.ShowFacets.ALWAYS
    actions = ["approve_items"]  # <- массовое одобрение
    fieldsets = (
        (None, {"fields": ("question", "author")}),
        ("Текст", {"fields": ("text",)}),
        ("Статус", {"fields": ("is_approved", "created_at")}),
    )

    def approve_items(self, request, queryset):
        queryset.update(is_approved=True)

    approve_items.short_description = "Одобрить выбранные комментарии"
