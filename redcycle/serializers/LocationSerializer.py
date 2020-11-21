from rest_framework import serializers
from ..models.Location import *

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'street', 'city', 'postalCode', 'state', 'description', 'authorId']
