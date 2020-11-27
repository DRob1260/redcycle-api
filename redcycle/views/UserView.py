from rest_framework import viewsets
from rest_framework import views
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from ..serializers.UserSerializer import *
from ..models.User import *

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('firstName')
    serializer_class = UserSerializer
    filterset_fields = ['id']

class CurrentUserView(views.APIView):
    def get(self, request):
        user = UserSerializer(self.request.user).data
        return Response(user)
