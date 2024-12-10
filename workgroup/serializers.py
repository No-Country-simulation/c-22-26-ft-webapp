from rest_framework import serializers
from .models import Workgroup, Task


class WorkgroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workgroup
        fields = ['name', 'description']

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['name', 'description', 'timestamp', 'workgroup']
