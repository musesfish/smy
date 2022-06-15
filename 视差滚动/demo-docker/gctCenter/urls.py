from django.contrib import admin
from django.urls import path,include
from . import newsdb

urlpatterns = [
    path('admin/', admin.site.urls),
    path('selectNews/', newsdb.selectNews),
    path('updateNewsLike/', newsdb.updateNewsLike),
    path('updateNewsComments/', newsdb.updateNewsComments),
    path('',include('gctApp.urls')),
]
