from django.contrib.auth.forms import UserCreationForm
from ..models.User import *

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = User
        fields=('email', 'firstName', 'lastName')

