from django.db import models


class Element(models.Model):
	en_name = models.CharField(max_length=20, default='')
	
	description = models.TextField(default='')
	atomic_num = models.PositiveSmallIntegerField(default=1)
	
	discoverer = models.CharField(max_length=50, default='')
	year_discovered = models.PositiveSmallIntegerField(default=1)
	phase_at_STP = models.CharField(max_length=20, default='')
	appearance = models.CharField(max_length=50, default='')
	standard_atomic_weight = models.DecimalField(max_digits=30, decimal_places=15, default=1.0)
	group = models.PositiveSmallIntegerField(default=1)
	period = models.PositiveSmallIntegerField(default=1)
	block = models.CharField(max_length=5, default='');
	category = models.CharField(max_length=20, default='')
	electron_configuration_full = models.CharField(max_length=200, default='')
	electron_configuration = models.CharField(max_length=30, default='')
	melting_point_celsius = models.DecimalField(max_digits=30, decimal_places=15, default=1.0)
	boiling_point_celsius = models.DecimalField(max_digits=30, decimal_places=15, default=1.0)
	density_at_STP = models.DecimalField(max_digits=30, decimal_places=15, default=1.0)
	triple_point = models.DecimalField(max_digits=30, decimal_places=15, default=1.0)
	critical_point = models.CharField(max_length=20, default='')
	heat_of_fusion = models.DecimalField(max_digits=16, decimal_places=8, default=1.0)
	heat_of_vaporization = models.DecimalField(max_digits=16, decimal_places=8, default=1.0)
	'''
	electron_per_shell
	molar_heat_capacity
	oxidation_states
	electronegativity
	ionization energies
	atomic_radius
	covalent_radius
	van_der_waals_radius
	'''
	'''
	#Columns to add
	atomicMass
	latinName
	discoverer
	meltingPointCelsius
	boilingPointCelsius
	period
	group
	block
	electronConfiguration
	atomicRadius
	electronegativity
	electronAffinity
	'''

	def __str__(self):
		return self.en_name


