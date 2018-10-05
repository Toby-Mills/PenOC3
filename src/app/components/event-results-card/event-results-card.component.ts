import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';

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
    this.select.next(this.oeventSummary);
  }

}
