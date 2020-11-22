from django.contrib.auth.forms import UserChangeForm
from ..models.User import *

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('email', 'firstName', 'lastName')
