from django.contrib import admin
from django.contrib.auth.models import Group

from users.models import Child, User

admin.site.unregister(Group)


@admin.register(Child)
class ChildAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "parent")
    search_fields = ("first_name", "last_name")
    show_facets = admin.ShowFacets.ALWAYS


class ChildInline(admin.TabularInline):
    model = Child
    fk_name = "parent"
    max_num = 1
    extra = 0
    verbose_name = "Дети"
    verbose_name_plural = "Дети"


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "email", "is_staff", "is_active", "created_at", "updated_at")
    search_fields = ("email",)
    list_filter = ("is_staff", "is_active")
    readonly_fields = ("created_at", "updated_at")
    show_facets = admin.ShowFacets.ALWAYS

    inlines = [ChildInline]

    fieldsets = (
        (None, {"fields": ("email",)}),
        ("Статус", {"fields": ("is_staff", "is_active")}),
        ("Даты", {"fields": ("created_at", "updated_at")}),
        ("Персональная информация", {"fields": ("first_name", "last_name", "patronymic_name", "date_of_birth")}),
    )
