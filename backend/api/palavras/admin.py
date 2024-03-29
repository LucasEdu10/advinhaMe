from django.contrib import admin
from palavras.models import PalavraDia, Palavra

class PalavraDiaAdmin(admin.ModelAdmin):
    list_display = ('id_palavra_dia', 'palavra')
    list_display_links = ('id_palavra_dia', 'palavra')
    search_fields = ('id_palavra_dia', 'palavra', )
    list_per_page = 50

class PalavraAdmin(admin.ModelAdmin):
    list_display = ('dia_da_palavra', 'palavra', 'posicao')
    list_display_links = ('palavra', 'posicao')
    search_fields = ('dia_da_palavra', 'palavra', )
    list_per_page = 50

admin.site.register(PalavraDia, PalavraDiaAdmin)
admin.site.register(Palavra, PalavraAdmin)
# Register your models here.
