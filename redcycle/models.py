from django.db import models
from uuid import uuid4
from .enums.CategoryEnum import CategoryEnum

class Account(models.Model):
    uuid = models.CharField(primary_key=True, max_length=36)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    active = models.BooleanField(default=True)
    def __str__(self):
        return self.uuid

class Location(models.Model):
    uuid = models.CharField(primary_key=True, max_length=36)
    street = models.CharField(max_length=100, null=True)
    postalCode = models.CharField(max_length=6)
    description = models.CharField(max_length=200, null=True)
    authorUuid = models.ForeignKey(Account, on_delete=models.CASCADE)
    def __str__(self):
        return self.uuid

class CommunityPost(models.Model):
    uuid = models.CharField(primary_key=True, max_length=36)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    creationDate = models.DateTimeField()
    available = models.BooleanField(default=True)
    category = models.CharField(choices=CategoryEnum.choices(), default=CategoryEnum.OTHER, max_length=30)
    authorUuid = models.ForeignKey(Account, on_delete=models.CASCADE)
    locationUuid = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return self.uuid
