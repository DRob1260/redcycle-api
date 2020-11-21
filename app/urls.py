from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('redcycle-api/admin/', admin.site.urls),
    path('redcycle-api', include('redcycle.urls'))
]
