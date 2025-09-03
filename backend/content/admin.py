from django.contrib import admin
from django.contrib.admin.sites import AdminSite

from content.models import (
    Catalog,
    DocumentContent,
    Expert,
    PhotoContent,
    VideoContent,
)

AdminSite.empty_value_display = "-"


@admin.register(Catalog)
class CatalogAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(DocumentContent)
class DocumentContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "short_description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"

    @admin.display(description="Описание")
    def short_description(self, obj):
        if obj.description:
            return obj.description[:50] + "..."
        return AdminSite.empty_value_display


@admin.register(PhotoContent)
class PhotoContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "short_description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"

    @admin.display(description="Описание")
    def short_description(self, obj):
        if obj.description:
            return obj.description[:50] + "..."
        return AdminSite.empty_value_display


@admin.register(VideoContent)
class VideoContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "short_description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"

    @admin.display(description="Описание")
    def short_description(self, obj):
        if obj.description:
            return obj.description[:50] + "..."
        return AdminSite.empty_value_display


@admin.register(Expert)
class ExpertAdmin(admin.ModelAdmin):
    list_display = ("id", "short_full_name", "position", "catalog", "created_at")
    search_fields = ("full_name", "position", "catalog__name")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS

    @admin.display(description="ФИО")
    def short_full_name(self, obj):
        return obj.full_name[:50] + "..."
