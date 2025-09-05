from django.utils.timezone import now
from django_filters import rest_framework as filters

from news.models import Competition


class CompetitionFilter(filters.FilterSet):
    is_active = filters.BooleanFilter(method="filter_by_is_active")

    class Meta:
        model = Competition
        fields = ("start_date", "end_date", "is_active")

    def filter_by_is_active(self, queryset, name, value):
        if value:
            return queryset.filter(start_date__lte=now().date(), end_date__gte=now().date())
        return queryset
