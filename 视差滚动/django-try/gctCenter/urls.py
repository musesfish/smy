from django.contrib import admin
from django.urls import path,include
from . import testdb
 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('testdb/', testdb.testdb),
    path('',include('gctCenterApp.urls'))
]