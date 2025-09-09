import os

from django.db.models.signals import post_delete
from django.dispatch import receiver

from content.models import Catalog, Expert, PhotoContent


@receiver(post_delete, sender=PhotoContent)
@receiver(post_delete, sender=Catalog)
@receiver(post_delete, sender=Expert)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """Удаляет файл из файловой системы при удалении объекта."""
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)
