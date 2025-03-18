from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'src.services.bookings'
    verbose_name = 'Bookings'
    verbose_plural = 'Bookings'
    default_auto_config = 'django.db.models.BigAutoField'

    # def ready(self):
    #     import src.core.signals
