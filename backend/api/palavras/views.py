from rest_framework import viewsets, generics
from palavras.models import PalavraDia, Palavra
from palavras.serializer import PalavraDiaSerializer, PalavraSerializer
from rest_framework.authentication import BasicAuthentication 
from rest_framework.permissions import IsAuthenticated

class PalavraDiaViewSet(viewsets.ModelViewSet):
    """Exibindo todas as palavras do dia"""
    queryset = PalavraDia.objects.all()
    serializer_class = PalavraDiaSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]

class PalavraSerializerViewSet(viewsets.ModelViewSet):
    """Exibindo todos as palavras"""
    queryset = Palavra.objects.all()
    serializer_class = PalavraSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]

# Create your views here.
