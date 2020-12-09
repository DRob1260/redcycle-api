from django.urls import include, path
from rest_framework import routers
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from .views.UserView import *
from .views.LocationView import *
from .views.CommunityPostView import *
from .views.SignupView import *
from .views.LoginView import *
from .views.RegisterView import *
from .views.LogoutView import *

router = routers.DefaultRouter()
router.register(r'/users', UserView)
router.register(r'/locations', LocationView)
router.register(r'/communityPosts', CommunityPostView)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('/account/', include('django.contrib.auth.urls')),
    path('/account/signup', SignupView, name='signup'),
    path('/account/login', LoginView, name='login'),
    path('/account/register', RegisterView, name='register'),
    path('/account/logout', LogoutView, name='logout'),
    path('/account/current', CurrentUserView.as_view()),
    # url(r'^$', login_required(TemplateView.as_view(template_name="home.html"))),
]
