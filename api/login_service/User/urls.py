from knox import views as knox_views
from User.viewSets import RegisterAPI
from User.viewSets import LoginAPI
from django.urls import path

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]

"""
from rest_framework import routers

from .viewSets import UserViewSet

router = routers.SimpleRouter()
router.register('user', UserViewSet)

urlpatterns = router.urls
"""