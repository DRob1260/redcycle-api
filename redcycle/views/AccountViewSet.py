from rest_framework import viewsets
from ..serializers.AccountSerializer import *
from ..models.Account import *

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all().order_by('firstName')
    serializer_class = AccountSerializer
