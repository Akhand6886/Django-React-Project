from django.contrib import admin
from django.urls import path, include  # <-- Make sure `include` is imported
from rest_framework.routers import DefaultRouter
from blog.views import BlogViewSet  # Assuming BlogViewSet is defined in blog/views.py
from django.http import HttpResponseRedirect


# Initialize the router
router = DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blog')  # Register your BlogViewSet with the router

urlpatterns = [
    path('', lambda request: HttpResponseRedirect('/api/')),# Redirect to /api/
    path('admin/', admin.site.urls),  # Django admin
    path('api/', include(router.urls)),  # Include API routes from the router
]
