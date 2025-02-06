from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import User
from rest_framework import generics
from .serializers import UserRegistrationSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]  # Example: require authentication
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']




class UserRegistrationAPIView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    # Optionally, you can allow anyone to access registration
    permission_classes = []  # No authentication required
