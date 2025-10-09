from django.utils.timezone import now
from django_filters import rest_framework as filters

from news.models import Comment, Competition


class CompetitionFilter(filters.FilterSet):
    is_active = filters.BooleanFilter(method="filter_by_is_active")

    class Meta:
        model = Competition
        fields = ("start_date", "end_date", "is_active")

    def filter_by_is_active(self, queryset, name, value):
        if value:
            return queryset.filter(start_date__lte=now().date(), end_date__gte=now().date())
        return queryset


class CommentFilter(filters.FilterSet):
    news = filters.NumberFilter(method="filter_by_news")
    announcement = filters.NumberFilter(method="filter_by_announcement")
    competition = filters.NumberFilter(method="filter_by_competition")

    class Meta:
        model = Comment
        fields = ("news", "announcement", "competition")

    def filter_by_news(self, queryset, name, value):
        return queryset.filter(news=value)

    def filter_by_announcement(self, queryset, name, value):
        return queryset.filter(announcement=value)

    def filter_by_competition(self, queryset, name, value):
        return queryset.filter(competition=value)
