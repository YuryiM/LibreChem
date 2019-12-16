from django.contrib import admin
from .models import Element

class ElementAdmin(admin.ModelAdmin):
	list_display = ('engName', 'description', 'atomicNum')

admin.site.register(Element, ElementAdmin)