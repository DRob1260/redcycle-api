from django.urls import include, path
from rest_framework import routers
from .views.UserView import *
from .views.LocationView import *
from .views.CommunityPostView import *
from .views.SignupView import *

router = routers.DefaultRouter()
router.register(r'/users', UserView)
router.register(r'/locations', LocationView)
router.register(r'/communityPosts', CommunityPostView)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('/account/', include('django.contrib.auth.urls')),
    path('/account/signup', SignupView, name='signup'),
    path('/account/current', CurrentUserView.as_view())
]
