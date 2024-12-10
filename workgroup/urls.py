from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WorkgroupViewSet, TaskViewSet

router = DefaultRouter()
router.register(r"groups", WorkgroupViewSet)
router.register(r"tasks", TaskViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
