from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    # first_name = models.CharField(max_length=0)
    # last_name = models.CharField(max_length=0)
    pass

class UserAdditionalData(models.Model):
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    status = models.CharField(max_length=30)
    bio = models.TextField(max_length=500, blank=True)
    sex = models.CharField(max_length=30)
    birth_date = models.DateField(null=True, blank=True)

class Friendship(models.Model):
    pass

class FriendRequest(models.Model):
    pass

class Chat(models.Model):
    pass

class Message(models.Model):
    pass

class Community(models.Model):
    pass

class CommunityMember(models.Model):
    pass

class CommunityPublications(models.Model):
    pass