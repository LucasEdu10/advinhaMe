from dataclasses import fields
from rest_framework import serializers
from palavras.models import Palavra, PalavraDia

class PalavraDiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PalavraDia
        fields = ['id', 'id_palavra_dia', 'palavra']

class PalavraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Palavra
        fields = '__all__'

# class MatriculaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Matricula
#         exclude = []

# class ListaMatriculasAlunoSerializer(serializers.ModelSerializer):
#     curso = serializers.ReadOnlyField(source='curso.descricao')
#     periodo = serializers.SerializerMethodField()
#     class Meta:
#         model = Matricula
#         fields = ['curso', 'periodo']

#     def get_periodo(self, obj): #funcao para exibir a descricao do tipo choices
#         return obj.get_periodo_display()

# class ListaAlunosMatriculadosCursoSerializer(serializers.ModelSerializer):
#     aluno_nome = serializers.ReadOnlyField(source='aluno.nome')
#     class Meta:
#         model = Matricula
#         fields = ['aluno_nome']
