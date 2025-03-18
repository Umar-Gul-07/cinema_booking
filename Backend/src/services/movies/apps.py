from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'src.services.movies'
    verbose_name = 'Movies'
    verbose_plural = 'Movies'
    default_auto_config = 'django.db.models.BigAutoField'

    # def ready(self):
    #     import src.core.signals
