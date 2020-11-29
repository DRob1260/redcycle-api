from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('redcycle/admin/', admin.site.urls),
    path('redcycle/api', include('redcycle.urls')),
    path('redcycle', include('ui.urls'))
]
