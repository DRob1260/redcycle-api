from django.db import models

class Account(models.Model):
    uuid = models.CharField(primary_key=True, max_length=36)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    active = models.BooleanField(default=True)
    def __str__(self):
        return self.uuid
