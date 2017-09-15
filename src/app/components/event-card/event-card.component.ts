import { Component, OnInit } from '@angular/core';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';

@Component({
  moduleId: module.id,
  selector: 'penoc-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  private oevent: OEventModel;
  public constructor(public oeventService: OEventService) { }

  ngOnInit() {

    }

  public getEvent() {
    this.oeventService.getOEvent(828).then(response => response.subscribe(data => {
          this.oevent = data.json()[0];
          console.log(data.json());
    }));
  }
}
