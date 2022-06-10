from django.db import models

# Create your models here.
class Test(models.Model):
    name = models.CharField(max_length=20)

class Imgs(models.Model):
    name = models.CharField(max_length=20)
    path = models.CharField(max_length=100)