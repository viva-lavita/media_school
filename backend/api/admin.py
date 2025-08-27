from django.contrib import admin

from api.models import Contact, Review


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("id", "short_address", "phone_number", "contact_email", "school_website")

    @admin.display(description="Адрес")
    def short_address(self, obj):
        return obj.address[:40] + "..."


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("id", "full_name", "age", "short_text", "created_at", "updated_at")
    search_fields = ("full_name", "review")
    date_hierarchy = "created_at"

    @admin.display(description="Текст")
    def short_text(self, obj):
        return obj.review[:50] + "..."
