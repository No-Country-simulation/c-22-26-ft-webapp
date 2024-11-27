from django.urls import path
from .views import LoginView, LogoutView, SignUpView

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("sign-up/", SignUpView.as_view(), name="signup"),
]
