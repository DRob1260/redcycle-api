from django.contrib import admin
from .models.Account import *
from .models.CommunityPost import *
from .models.Location import *

admin.site.register(Account)
admin.site.register(Location)
admin.site.register(CommunityPost)
