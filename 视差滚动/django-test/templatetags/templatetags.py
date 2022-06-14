from django import template
import json

register = template.Library()   #register的名字是固定的,不可改变

@register.filter
def my_filter(v1, v2):
    return v1 % v2

@register.filter
def change_data(v1):
    return json.dumps(v1)
    # return json.loads(v1)
