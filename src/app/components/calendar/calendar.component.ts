import { Component, OnInit } from '@angular/core';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'penoc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public oeventService: OEventService, public calendarService: CalendarService) { 

  }

  ngOnInit() {
    console.log(this.calendarService.oevents.length);
    if(this.calendarService.oevents.length == 0){
      console.log('load calendar');
      this.oeventService.getOEvent(null, null, null, new Date(), null).subscribe(response =>{
        this.calendarService.oevents = response.json();
      })
    }
  }

}
