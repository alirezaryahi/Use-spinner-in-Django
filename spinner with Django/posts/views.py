from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from .models import Post


# Create your views here.


class PostTemplateView(TemplateView):
    template_name = 'main.html'


def posts_json(request):
    data = list(Post.objects.values())
    return JsonResponse(data, safe=False)
