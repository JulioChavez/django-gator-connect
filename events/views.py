from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .models import Event

def index(request):
    try:
        latest_event_list = Event.objects.order_by('-event_start_date_time')[:5]
        event_list = ', '.join([e.event_name for e in latest_event_list])
        template = loader.get_template('events/index.html')
        context = {
            'latest_event_list': latest_event_list,
        }
    except Event.DoesNotExist:
        raise Http404("Question does not exist")

    return render(request, 'events/index.html', context)
