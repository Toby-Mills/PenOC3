import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OEventService } from '../../../../node_modules/penoc-sdk/services/oevent.service';
import { OEventResultSummaryModel } from '../../../../node_modules/penoc-sdk/models/oevent-result-summary.model';

@Component({
  moduleId: module.id,
  selector: 'penoc-event-results-card',
  templateUrl: './event-results-card.component.html',
  styleUrls: ['./event-results-card.component.css']
})
export class EventResultsCardComponent implements OnInit {
  @Input() oeventSummary: OEventResultSummaryModel;
  @Output() select:EventEmitter<OEventResultSummaryModel> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  private cardClick(){
    console.log(this.oeventSummary);
    this.select.next(this.oeventSummary);
  }

}
