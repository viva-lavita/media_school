import os

from django.db.models.signals import post_delete
from django.dispatch import receiver

from news.models import Announcement, Competition, News, Paragraph


@receiver(post_delete, sender=News)
@receiver(post_delete, sender=Announcement)
@receiver(post_delete, sender=Competition)
@receiver(post_delete, sender=Paragraph)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """Удаляет файл из файловой системы при удалении объекта."""
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)
