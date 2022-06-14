# Generated by Django 3.2.13 on 2022-06-13 03:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gctApp', '0003_auto_20220613_1008'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='标题')),
                ('author', models.CharField(default='amy', max_length=100, verbose_name='作者')),
                ('content', models.CharField(default='', max_length=1000, verbose_name='内容')),
                ('path', models.ImageField(upload_to='img_url/', verbose_name='图片地址')),
                ('time', models.DateTimeField(default=datetime.datetime(2022, 6, 13, 11, 14, 43, 747390), verbose_name='添加时间')),
                ('like', models.CharField(max_length=500, verbose_name='喜欢')),
                ('comments', models.CharField(max_length=1000, verbose_name='评论')),
            ],
        ),
        migrations.DeleteModel(
            name='Imgs',
        ),
        migrations.DeleteModel(
            name='Test',
        ),
    ]
