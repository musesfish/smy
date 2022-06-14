# -*- coding: utf-8 -*-
 
from django.http import HttpResponse
from django.core import serializers
from gctApp.models import News
from django.views.decorators.csrf import csrf_exempt

# # 数据库操作 INSERT
# def testdb(request):
#     test1 = News(name='网站首页')
#     test1.save()
#     return HttpResponse("<p>数据添加成功！</p>")

# # 数据库操作 update
# def testdb(request):
#     # 修改其中一个id=1的name字段，再save，相当于SQL中的UPDATE
#     test1 = News.objects.get(id=2)
#     test1.name = '新闻资讯'
#     test1.save()
#     test1 = News.objects.get(id=3)
#     test1.name = '核心项目'
#     test1.save()
#     test1 = News.objects.get(id=4)
#     test1.name = '产业模块'
#     test1.save()
#     test1 = News.objects.get(id=5)
#     test1.name = '企业寄语'
#     test1.save()
#     test1 = News.objects.get(id=6)
#     test1.name = '关于我们'
#     test1.save()
#     test1 = News.objects.get(id=7)
#     test1.name = '联系我们'
#     test1.save()
#     # 另外一种方式
#     #News.objects.filter(id=1).update(name='Google')
#     # 修改所有的列
#     # News.objects.all().update(name='Google')
#     return HttpResponse("<p>all修改成功</p>")

# # 数据库操作 delete
# def testdb(request):
#     # 删除id=1的数据
#     test1 = News.objects.get(id=9)
#     test1.delete()
#     # 另外一种方式
#     # News.objects.filter(id=1).delete()
#     # 删除所有数据
#     # News.objects.all().delete()
#     return HttpResponse("<p>删除成功</p>")


# # 数据库操作 SELECT
# def newsdb(request):
#     # 初始化
#     response = ""
#     response1 = ""
#     # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM
#     list = News.objects.all()
#     # filter相当于SQL中的WHERE，可设置条件过滤结果
#     response2 = News.objects.filter(id=1)   
#     # 获取单个对象
#     response3 = News.objects.get(id=1) 
#     # 限制返回的数据 相当于 SQL 中的 OFFSET 0 LIMIT 2;
#     News.objects.order_by('name')[0:2]
#     #数据排序
#     News.objects.order_by("id")
#     # 上面的方法可以连锁使用
#     News.objects.filter(name="runoob").order_by("id")
#     # 输出所有数据
#     for var in list:
#         response1 += var.name + " "
#     response = response1
#     return HttpResponse("<p>" + response + "</p>")

# 数据库操作 SELECT
def selectNews(request):
    # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM
    news = News.objects.all()  
    news= serializers.serialize("json", news)
    # print(news)
    return HttpResponse(news,content_type="application/json")

# 数据库操作 update
@csrf_exempt
def updateNewsLike(request):
    id = request.POST.get("id")
    like = request.POST.get("like")
    # 修改其中一个id=id的like字段，再save，相当于SQL中的UPDATE
    news = News.objects.get(id=id)
    news.like = like
    news.save()
    # # 另外一种方式
    # #News.objects.filter(id=id).update(like=like)
    return HttpResponse('ok')

# 数据库操作 update
@csrf_exempt
def updateNewsComments(request):
    id = request.POST.get("id")
    comments = request.POST.get("comments")
    # 修改其中一个id=id的comments字段，再save，相当于SQL中的UPDATE
    news = News.objects.get(id=id)
    news.comments = comments
    news.save()
    # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM
    newsone = News.objects.filter(id=id)   
    newsone = serializers.serialize("json", newsone)
    return HttpResponse(newsone,content_type="application/json")