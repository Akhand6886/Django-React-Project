from django.db import models
from django.contrib.auth.models import User

class Anime(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    release_date = models.DateField(null=True, blank=True)
    # etc. for genre, episodes, studio, etc.

    def __str__(self):
        return self.title

class Review(models.Model):
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # or a custom user
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.anime.title} - {self.rating}'
