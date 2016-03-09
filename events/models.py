from __future__ import unicode_literals

from django.db import models

class Event(models.Model):
    event_name = models.CharField(max_length=200)
    event_description = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    attendance_count = models.IntegerField(default=0)
    fb_url = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.event_name

    # SAMPLE:
    # test = Event(event_name='IEEE General Body Meeting', event_description='Come out to the IEEE GBM for some free food and information on how you can get involved!', pub_date=timezone.now(), attendance_count=0, fb_url='https://www.facebook.com/events/1639937942897643/')
