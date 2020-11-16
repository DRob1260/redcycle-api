from django.db import models
from .Account import Account

class Location(models.Model):
    uuid = models.CharField(primary_key=True, max_length=36)
    street = models.CharField(max_length=100, null=True)
    postalCode = models.CharField(max_length=6)
    description = models.CharField(max_length=200, null=True)
    authorUuid = models.ForeignKey(Account, on_delete=models.CASCADE)
    def __str__(self):
        return self.uuid
