from django.contrib import admin
from .models import Element

class ElementAdmin(admin.ModelAdmin):
	list_display = ('en_name', 'description', 'atomic_num')

admin.site.register(Element, ElementAdmin)