from rest_framework import viewsets
from .models import Workgroup, Task
from .serializers import WorkgroupSerializer, TaskSerializer

class WorkgroupViewSet(viewsets.ModelViewSet):
    queryset = Workgroup.objects.all()
    serializer_class = WorkgroupSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
