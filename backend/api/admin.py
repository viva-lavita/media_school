from django.contrib import admin
from django.contrib.admin.sites import AdminSite

from api.constants import ADMIN_TEXT_LEN
from api.models import Contact, LegalDocuments, Review


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("id", "short_address", "phone_number", "contact_email", "school_website")

    @admin.display(description="Адрес")
    def short_address(self, obj):
        if obj.address:
            if len(obj.address) <= ADMIN_TEXT_LEN:
                return obj.address
            return obj.address[:ADMIN_TEXT_LEN] + "..."
        return AdminSite.empty_value_display


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("id", "full_name", "age", "short_text", "created_at", "updated_at")
    search_fields = ("full_name", "review")
    date_hierarchy = "created_at"

    @admin.display(description="Текст")
    def short_text(self, obj):
        if len(obj.review) <= ADMIN_TEXT_LEN:
            return obj.review
        return obj.review[:ADMIN_TEXT_LEN] + "..."


@admin.register(LegalDocuments)
class LegalDocumentsAdmin(admin.ModelAdmin):
    list_display = ("id", "short_privacy_policy", "short_user_agreement", "created_at", "updated_at")

    @admin.display(description="Политика конфиденциальности")
    def short_privacy_policy(self, obj):
        return obj.privacy_policy.name.split("/")[-1]

    @admin.display(description="Пользовательское соглашение")
    def short_user_agreement(self, obj):
        return obj.user_agreement.name.split("/")[-1]
