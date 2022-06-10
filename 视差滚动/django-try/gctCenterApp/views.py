from django.shortcuts import render

# Create your views here.
from gctCenterApp.models import Test

def index(request):
  return render(request, "index.html")

def test(request):
  list = Test.objects.all() 
  return render(request, "test.html", {"list": list})
