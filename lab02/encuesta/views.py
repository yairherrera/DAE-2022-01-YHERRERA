from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'titulo' : "Formulario",
    }
    return render(request, 'encuesta/formulario.html', context)

def enviar(request):
    context = {
        'titulo': 'Respuesta',
        'diametro':request.POST['diametro'],
        'altura': request.POST['altura'],
        'resultado':float(3.141592)*float(request.POST['altura'])*float(request.POST['diametro'])*float(request.POST['diametro']),
    }
    return render(request, 'encuesta/respuesta.html', context)
