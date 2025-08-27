from django.contrib import admin

from api.models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("id", "short_address", "phone_number", "contact_email", "school_website")

    @admin.display(description="Адрес")
    def short_address(self, obj):
        return obj.address[:40] + "..."
