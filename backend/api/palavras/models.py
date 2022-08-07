from pyexpat import model
from statistics import mode
from django.db import models


def verificarPalavra():
    count = 0
    posicao_palavra = count + 1
    return posicao_palavra

class PalavraDia(models.Model):
    id_palavra_dia = models.IntegerField(verbose_name="Dia da Palavra")
    palavra = models.CharField(verbose_name="Palavra do dia", max_length=40, blank=True, null=False)

    def __str__(self):
        return self.palavra

class Palavra(models.Model):
    palavra_do_dia = models.ForeignKey(PalavraDia, verbose_name="Dia da Palavra", on_delete=models.CASCADE, related_name="palavra_dia")
    posicao = models.IntegerField(verbose_name="Posição", null=True, default=verificarPalavra, editable=False)
    palavra = models.CharField(verbose_name="Palavra" ,max_length=40, blank=True, null=False)

    def __str__(self):
        return self.palavra
# Create your models here.
