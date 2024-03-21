from django.urls import path
from .views import register_admin, login_admin, admin_logout

urlpatterns = [
    path('register/', register_admin, name='register'),
    path('login/', login_admin, name='login'),
    path('logout/', admin_logout, name='logout')
]