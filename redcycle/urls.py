from django.urls import include, path
from rest_framework import routers
from .views.AccountViewSet import *
from .views.LocationViewSet import *
from .views.CommunityPostViewSet import *

router = routers.DefaultRouter()
router.register(r'/accounts', AccountViewSet)
router.register(r'/locations', LocationViewSet)
router.register(r'/communityPosts', CommunityPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
