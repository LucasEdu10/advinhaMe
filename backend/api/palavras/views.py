from rest_framework import viewsets, generics
from palavras.models import PalavraDia, Palavra
from palavras.serializer import PalavraDiaSerializer, PalavraSerializer, PalavrasRelacionadasAPalavraDiaSerializer
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

class PalavrasRelacionadasAoDia(viewsets.ModelViewSet):
    """Exibindo as palavras relacionadas ao dia"""
    def get_queryset(self):
        queryset = Palavra.objects.filter(dia_da_palavra_id=self.kwargs['pk'], palavra=self.kwargs['palavra'])
        palavra = self.kwargs.get('palavra')
        return queryset
    serializer_class = PalavrasRelacionadasAPalavraDiaSerializer

class ListarPalavrasDiaComPalavras(viewsets.ModelViewSet):
    """Exibindo todos as palavras"""
    def get_queryset(self):
        queryset = Palavra.objects.filter(dia_da_palavra_id=self.kwargs['pk'])
        return queryset
    serializer_class = PalavrasRelacionadasAPalavraDiaSerializer
# Create your views here.
