from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from ..forms.LoginForm import *

def LoginView(request):
	form = LoginForm(request.POST or None)
	if form.is_valid():
		email = form.cleaned_data.get("email")
		password = form.cleaned_data.get("password")
		user = authenticate(email = email, password = password)
		login(request, user)
		return redirect("/redcycle/post-creator")
	return render(request, "registration/form.html", {
		"form" : form,
		"title" : "Login",
	})
