from rest_framework import viewsets
from ..serializers.LocationSerializer import *
from ..models.Location import *

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all().order_by('state')
    serializer_class = LocationSerializer
