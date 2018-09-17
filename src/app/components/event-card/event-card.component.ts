import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';

@Component({
  moduleId: module.id,
  selector: 'penoc-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() oevent: OEventModel;
  @Output() select:EventEmitter<OEventModel> = new EventEmitter();
  public constructor(public oeventService: OEventService) { }

  ngOnInit() {

    }
    
    private cardClick(){
      this.select.next(this.oevent);
    }
}
