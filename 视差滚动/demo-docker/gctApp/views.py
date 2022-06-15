from django.shortcuts import render

# Create your views here.
from gctApp.models import Themes
from gctApp.models import News

def index(request):
  themes = Themes.objects.all()
  news = News.objects.all()
  return render(request, "index.html", {"themes":themes,"news":news})

def details(request):
  return render(request, "details.html")
