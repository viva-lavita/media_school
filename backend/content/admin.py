from django.contrib import admin
from django.contrib.admin.sites import AdminSite

from content.models import (
    Catalog,
    DocumentContent,
    PhotoContent,
    VideoContent,
)

AdminSite.empty_value_display = "-"
admin.site.register(Catalog)


@admin.register(DocumentContent)
class DocumentContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"


@admin.register(PhotoContent)
class PhotoContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"


@admin.register(VideoContent)
class VideoContentAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "created_at", "description")
    search_fields = ("catalog__name", "description")
    list_filter = ("catalog__name",)
    show_facets = admin.ShowFacets.ALWAYS
    date_hierarchy = "created_at"
