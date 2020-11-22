from rest_framework import viewsets
from ..serializers.UserSerializer import *
from ..models.User import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('firstName')
    serializer_class = UserSerializer
