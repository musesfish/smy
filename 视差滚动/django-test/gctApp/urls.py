from django.urls import path
from django.conf.urls import url
from . import views
from django.views.static import serve
from gctCenter.settings import MEDIA_ROOT

urlpatterns = [
    path('', views.index),
    path('details/', views.details),
    url(r'^media/(?P<path>.*)$',serve,{"document_root":MEDIA_ROOT}),
]