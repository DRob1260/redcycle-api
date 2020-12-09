from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from ..forms.RegisterForm import *

def RegisterView(request):
	form = UsersRegisterForm(request.POST or None)
	if form.is_valid():
		user = form.save()
		password = form.cleaned_data.get("password")
		user.set_password(password)
		user.save()
		new_user = authenticate(email = user.email, password = password)
		login(request, new_user)
		return redirect("/redcycle/api/account/signin")
	return render(request, "registration/form.html", {
		"title" : "Register",
		"form" : form
	})
