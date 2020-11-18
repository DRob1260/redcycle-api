from django.db import models
import uuid

class Account(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, unique=True, default=uuid.uuid4)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    active = models.BooleanField(default=True)
    def __str__(self):
        return self.firstName + " " + self.lastName
