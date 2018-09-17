import { Component, OnInit } from '@angular/core';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';

@Component({
  selector: 'penoc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
private oevents: OEventModel[];

  constructor(public oeventService: OEventService) { 

  }

  ngOnInit() {
    this.oeventService.getOEvent(null, null, null, new Date(), null).then(data => {
      data.subscribe(response =>{
        this.oevents = response.json();
      })
    })
  }

}
