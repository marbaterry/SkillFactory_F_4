from django.contrib.auth.models import User, Group
from .models import Category, Recipe
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category_name']


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    recipe_user = serializers.StringRelatedField(many=False)
    recipe_category = serializers.StringRelatedField(many=False)

    class Meta:
        model = Recipe
        fields = ['id', 'recipe_name', 'recipe_composition', 'recipe_text',
                  'recipe_date', 'recipe_category', 'recipe_user']