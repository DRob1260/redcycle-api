from rest_framework import serializers
from ..models.CommunityPost import *

class CommunityPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityPost
        fields = ['id', 'title', 'description', 'creationDate', 'available', 'category', 'authorId', 'locationId']
