from django.contrib.auth import logout
from django.http import HttpResponseRedirect

def LogoutView(request):
	logout(request)
	return HttpResponseRedirect("/redcycle")
