from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()
# Create your models here.
class Club (models.Model):
    club_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    insta = models.CharField(max_length=500)
    email = models.CharField(max_length=255)
    website = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/', default=None)
    users = models.ManyToManyField(UserModel, blank=True)

    def __str__(self):
        return self.name