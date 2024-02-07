from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass

class UserAdditionalData(models.Model):
    pass

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

class communityPublications(models.Model):
    pass