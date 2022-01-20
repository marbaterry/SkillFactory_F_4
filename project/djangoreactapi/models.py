import datetime

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Category(models.Model):
    category_name = models.CharField(max_length=200)

    def __str__(self):
        return self.category_name


class Recipe(models.Model):
    recipe_name = models.CharField(max_length=200)
    recipe_composition = models.TextField()
    recipe_text = models.TextField()
    recipe_date = models.DateTimeField('date published')
    recipe_category = models.ForeignKey(Category, on_delete=models.CASCADE)
    recipe_user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.recipe_name

    def was_published_recently(self):
        return self.recipe_date >= timezone.now() - datetime.timedelta(days=1)


