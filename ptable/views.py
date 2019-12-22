from django.shortcuts import render
from .models import Element


def home(request):
	context = {
		'elements': Element.objects.all()
	}
	return render(request, 'ptable/ptable.html', context)