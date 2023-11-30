import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var FullCalendar: any;

@Component({
  selector: 'app-show-appointments-calender',
  templateUrl: './show-appointments-calender.component.html',
  styleUrls: ['./show-appointments-calender.component.scss']
})
export class ShowAppointmentsCalenderComponent {
	
	 calendarEvents: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.http.get<any[]>('http://localhost:8081//api/admin/allAppointments')
      .subscribe(data => {
        this.calendarEvents = data.map(appointment => ({
          title: appointment.title,
          start: appointment.startDateTime,
          end: appointment.endDateTime
        }));

        this.renderCalendar();
      });
  }

  renderCalendar(): void {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: this.calendarEvents
    });

    calendar.render();
  }

}
