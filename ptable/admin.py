from django.contrib import admin
from .models import Element

class ElementAdmin(admin.ModelAdmin):
	fields = ('en_name', 
				'discoverer', 
				'description', 
				'atomic_num', 
				'year_discovered', 
				'phase_at_STP', 
				'appearance', 
				'standard_atomic_weight', 
				'group', 
				'period', 
				'block', 
				'category', 
				'electron_configuration_full', 
				'electron_configuration', 
				'melting_point_celsius', 
				'boiling_point_celsius', 
				'density_at_STP', 
				'triple_point', 
				'critical_point', 
				'heat_of_fusion', 
				'heat_of_vaporization')
	#fields = ('en_name', 'description', 'atomic_num')

admin.site.register(Element, ElementAdmin)