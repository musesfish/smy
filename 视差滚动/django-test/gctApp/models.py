from django.db import models
from datetime import datetime

# Create your models here.

class Themes(models.Model):
    id = models.AutoField(blank=False, primary_key=True,verbose_name=u"ID")
    theme = models.CharField(max_length=200,verbose_name=u"标题")

class News(models.Model):
    id = models.AutoField(blank=False, primary_key=True,verbose_name=u"ID")
    title = models.CharField(max_length=200,verbose_name=u"标题")
    author = models.CharField(max_length=100,verbose_name=u"作者",default="amy")
    content = models.CharField(max_length=1000,verbose_name=u"内容",default="")
    path = models.ImageField(upload_to='img_url/',verbose_name=u"图片地址")
    time = models.DateTimeField(default=datetime.now(),verbose_name=u"添加时间")
    like = models.IntegerField(verbose_name=u"喜欢",null=True, blank=True)
    comments = models.CharField(max_length=1000 ,verbose_name=u"评论",null=True,blank=True)