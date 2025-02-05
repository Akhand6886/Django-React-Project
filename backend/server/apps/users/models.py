from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    Extend the default Django user with additional fields.
    """
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username
