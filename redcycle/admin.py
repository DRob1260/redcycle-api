from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models.User import *
from .models.CommunityPost import *
from .models.Location import *
from .models.User import *
from .forms.CustomUserChangeForm import *
from .forms.CustomUserCreationForm import *

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ('email', 'is_staff', 'is_active')
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active', 'firstName', 'lastName')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(User, CustomUserAdmin)
admin.site.register(Location)
admin.site.register(CommunityPost)
