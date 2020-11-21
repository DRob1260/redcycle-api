from django.db import models
from uuid import uuid4
from .Account import *
from ..enums.StateEnum import *

class Location(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, unique=True, default=uuid4)
    street = models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100)
    postalCode = models.CharField(max_length=6)
    state = models.CharField(max_length=2, choices=StateEnum.choices(), default=StateEnum.IL)
    description = models.CharField(max_length=200, null=True)
    authorId = models.ForeignKey(Account, on_delete=models.CASCADE)
    def __str__(self):
        return self.city + ", " + self.state + " " + self.postalCode
