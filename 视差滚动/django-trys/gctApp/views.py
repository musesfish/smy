from django.shortcuts import render

# Create your views here.
from gctApp.models import Test
from gctApp.models import Imgs

def index(request):
  list = Test.objects.all() 
  imgs = Imgs.objects.all()
  return render(request, "index.html", {"list": list,"imgs":imgs})

def test(request):
  list = Test.objects.all() 
  imgs = Imgs.objects.all() 
  return render(request, "test.html", {"imgs": imgs})
