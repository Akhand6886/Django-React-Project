from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.users'  # This is the full Python path.
    label = 'users'  # This explicitly sets the app label to "users".
    verbose_name = 'User'  # Human-readable singular name
    verbose_name_plural = 'Users'  # Human-readable plural name
