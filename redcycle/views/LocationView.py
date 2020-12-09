from rest_framework import viewsets
from ..serializers.LocationSerializer import *
from ..models.Location import *

class LocationView(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    filterset_fields = ['authorId']
