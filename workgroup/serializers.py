from rest_framework import serializers
from .models import Workgroup, Task


class MemberListingField(serializers.RelatedField):
    def to_representation(self, value):
        return value.email


class WorkgroupSerializer(serializers.ModelSerializer):
    members = MemberListingField(many=True, read_only=True)
    tasks = serializers.StringRelatedField(many=True)

    class Meta:
        model = Workgroup
        fields = ["name", "description", "members", "tasks"]


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["name", "description", "timestamp", "workgroup"]
