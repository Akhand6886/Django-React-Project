from django.contrib import admin
from django.urls import path, include  # <-- Make sure `include` is imported



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('apps.users.urls')),
    path('api/posts/', include('apps.posts.urls')),
    path('api/categories/', include('apps.categories.urls')),
]
