from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass

class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    # Дополнительные поля профиля пользователя


class Chat(models.Model):
    name = models.CharField(max_length=255)
    # Дополнительные поля чата

class ChatParticipant(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    # Дополнительные поля участника чата

class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    text = models.TextField()
    # Дополнительные поля сообщения

class Community(models.Model):
    name = models.CharField(max_length=255)
    # Дополнительные поля сообщества

class CommunityMember(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    # Дополнительные поля участника сообщества

class FriendRequest(models.Model):
    from_user = models.ForeignKey(CustomUser, related_name='sent_friend_requests', on_delete=models.CASCADE)
    to_user = models.ForeignKey(CustomUser, related_name='received_friend_requests', on_delete=models.CASCADE)
    status = models.CharField(max_length=255)
    # Дополнительные поля заявки в друзья