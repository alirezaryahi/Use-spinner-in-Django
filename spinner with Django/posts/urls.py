from django.urls import path
from .views import PostTemplateView, posts_json

urlpatterns = [
    path('', PostTemplateView.as_view(), name='main-view'),
    path('posts-json/', posts_json, name='posts-json-view'),
]
