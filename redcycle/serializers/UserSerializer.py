from rest_framework import serializers
from ..models.User import *

# explanation of this page: https://www.django-rest-framework.org/api-guide/serializers/#modelserializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'firstName', 'lastName', 'email', 'is_active']
