from django.contrib import admin
from .models import Element

class ElementAdmin(admin.ModelAdmin):
	'''fields = ('en_name', 
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
				'heat_of_vaporization')'''
	fieldsets = [
		('Element', {'fields': ['en_name','appearance', 'standard_atomic_weight']}),
		('Periodic table properties', {'fields': ['atomic_num','group', 'period', 'block', 'category', 'electron_configuration']}),
		('Physical properties', {'fields': ['phase_at_STP','melting_point_celsius', 'boiling_point_celsius', 'triple_point','critical_point', 'heat_of_fusion', 'heat_of_vaporization']}),
	]

admin.site.register(Element, ElementAdmin)