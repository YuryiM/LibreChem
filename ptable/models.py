from django.db import models


class Element(models.Model):
	engName = models.CharField(max_length=20)
	description = models.TextField()
	atomicNum = models.PositiveSmallIntegerField()
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

	def _str_(self):
		return self.engName


