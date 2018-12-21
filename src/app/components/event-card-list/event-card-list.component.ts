import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventModel } from 'penoc-sdk/models/oevent.model';

@Component({
  selector: 'penoc-event-card-list',
  templateUrl: './event-card-list.component.html',
  styleUrls: ['./event-card-list.component.css']
})
export class EventCardListComponent implements OnInit {

  public eventList: Array<OEventModel>;
  public loading: boolean = false;
  @Output() select:EventEmitter<OEventModel> = new EventEmitter();

  constructor(private oEventService: OEventService) { }

  ngOnInit() {
    this.loading = true;
    this.oEventService.getOEvent(undefined , undefined, undefined, new Date())
    .subscribe(response => {
        this.eventList = response.json();
        this.loading = false;
      });
  }

  private cardClick(oevent: OEventModel){
    this.select.next(oevent);
  }
}
