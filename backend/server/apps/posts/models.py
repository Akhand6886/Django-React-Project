from django.db import models
from apps.users.models import User
from apps.categories.models import Category

class Post(models.Model):
    title = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='posts/')
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
