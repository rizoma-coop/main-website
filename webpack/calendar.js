import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';

const eventColors = [
  {
    description: 'Semana A',
    color: '#9ecf8d',
  },
  {
    description: 'Semana B',
    color: '#ebcf63',
  },
  {
    description: 'Semana C',
    color: '#8eb0aa',
  },
  {
    description: 'Semana D',
    color: '#cd8d90',
  }
];

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  if (calendarEl) {  
    let calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, googleCalendarPlugin ],
      initialView: 'dayGridMonth',
      googleCalendarApiKey: 'AIzaSyDLu_kqvsvo5ZynmMnAE3hKJTjW2zcJ0vo',
      events: {
        googleCalendarId: 'c_2tsctvtd7e6rs4c00heuhjgkeg@group.calendar.google.com'
      },
      eventColor: '#1e817f',
      eventDidMount: function(info) {
        const eventDescription = info.event.title;
        const eventMatch = eventColors.find((ev) => (ev.description === eventDescription));
        if (eventMatch) {
          info.el.style.backgroundColor = eventMatch.color;
          info.el.style.borderColor = eventMatch.color;
          info.el.style.fontWeight = 'bold';
        }
      }
    });
    calendar.render();
  }
});