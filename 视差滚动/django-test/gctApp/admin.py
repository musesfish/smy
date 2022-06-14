from django.contrib import admin
from . import models

# Register your models here.
# admin.site.register(models.Themes)
# admin.site.register(models.News)

@admin.register(models.Themes)
class ThemesAdmin(admin.ModelAdmin):
    list_display = ('id','theme')

@admin.register(models.News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('id','title','author','content','path','time','like','comments',)