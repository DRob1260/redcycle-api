from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from ..forms.CustomUserCreationForm import *

def SignupView(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(email=email, password=raw_password)
            login(request, user)
            return redirect('/redcycle')
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})
