from django.db import models


class Element(models.Model):
	en_name = models.CharField(max_length=20)
	description = models.TextField()
	atomic_num = models.PositiveSmallIntegerField()
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


