from django.contrib import admin

from content.models import Catalog, DocumentContent, PhotoContent, VideoContent

admin.site.register(Catalog)


@admin.register(DocumentContent)
class DocumentContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS


@admin.register(PhotoContent)
class PhotoContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS


@admin.register(VideoContent)
class VideoContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS

    # Заготовка для новостей и анонсов
    # def save_model(self, request, obj, form, change):
    #     if not change:
    #         obj.created_by = request.user
    #     obj.updated_by = request.user
    #     return super().save_model(request, obj, form, change)
