from rest_framework import serializers
from ..models.Account import *

class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'firstName', 'lastName', 'email', 'active']
