from rest_framework import serializers
from post.models import Post

class PostSerializer(serializers.ModelSerializer):
   class Meta:
       model = Post
       fields = [
           'user',
           'title',
           'location',
           'notes',
           'travel_date',
           'slug'
       ]

class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'user',
            'title',
            'location',
            'notes',
            'travel_date'
        ]