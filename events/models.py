from __future__ import unicode_literals

from django.db import models
import datetime

class Event(models.Model):
    event_name = models.CharField(max_length=200)
    event_description = models.CharField(max_length=200)
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=20)
    zip_code = models.IntegerField()
    event_start_date_time = models.DateTimeField(
        'Start Date / Time'
    )
    event_end_date_time = models.DateTimeField(
        'End Date / Time'
    )
    attendance_count = models.IntegerField(default=0)
    fb_url = models.CharField(
        'Facebook Event URL',
        max_length=255,
        default='',
        blank=True
    )

    def __str__(self):
        return self.event_name

    # SAMPLE:
    # test = Event(event_name='IEEE General Body Meeting', event_description='Come out to the IEEE GBM for some free food and information on how you can get involved!', pub_date=timezone.now(), attendance_count=0, fb_url='https://www.facebook.com/events/1639937942897643/')
