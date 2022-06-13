from django.db import models
from datetime import datetime

# Create your models here.
class Test(models.Model):
    name = models.CharField(max_length=20)

class Imgs(models.Model):
    name = models.CharField(max_length=200,verbose_name=u"标题")
    author = models.CharField(max_length=100,verbose_name=u"作者",default="amy")
    content = models.CharField(max_length=1000,verbose_name=u"内容",default="")
    path = models.ImageField(upload_to='img_url/',verbose_name=u"图片地址")
    time = models.DateTimeField(default=datetime.now(),verbose_name=u"添加时间")