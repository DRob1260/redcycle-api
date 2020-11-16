from django.contrib import admin
from .models.models import Account, Location, CommunityPost

admin.site.register(Account)
admin.site.register(Location)
admin.site.register(CommunityPost)
