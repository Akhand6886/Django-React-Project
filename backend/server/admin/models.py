from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin

class userprofile(AbstractBaseUser,PermissionsMixin):
    """Represents User Profile in our system"""
    email = models.EmailField(max_length=255, unique=True)
    name =  models.CharField(max_length=255)
