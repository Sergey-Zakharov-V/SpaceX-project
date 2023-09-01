from rest_framework import serializers
from .models import MenuOptions, AdvantagesOptions


class MenuOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuOptions
        fields = '__all__'


class AdvantagesOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvantagesOptions
        fields = '__all__'