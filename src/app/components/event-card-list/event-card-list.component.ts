import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';

@Component({
  selector: 'penoc-event-card-list',
  templateUrl: './event-card-list.component.html',
  styleUrls: ['./event-card-list.component.css']
})
export class EventCardListComponent implements OnInit {
private eventList: Array<OEventModel>;

  constructor(private oEventService: OEventService) { }

  ngOnInit() {
    this.oEventService.getOEvent(undefined , undefined, undefined, new Date())
    .then(data => {
      data.subscribe(response => {
        this.eventList = response.json();
      });
    });
  }

}
