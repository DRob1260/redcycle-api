from django.db import models
from .Account import Account
from .Location import Location
from ..enums.CategoryEnum import CategoryEnum

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
