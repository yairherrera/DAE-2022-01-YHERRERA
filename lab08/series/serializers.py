from rest_framework import serializers
from .models import Serie
 
 
class SerieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serie
        fields = ('id', 'name', 'release_date', 'rating', 'category')

 
    def create(self,validated_data):
        return Serie.objects.create(**validated_data)
