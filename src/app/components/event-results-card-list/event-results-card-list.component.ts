import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';

@Component({
  selector: 'penoc-event-results-card-list',
  templateUrl: './event-results-card-list.component.html',
  styleUrls: ['./event-results-card-list.component.css']
})
export class EventResultsCardListComponent implements OnInit {
  @Input() resultsList:Array<OEventResultSummaryModel>;
  @Output() select:EventEmitter<OEventResultSummaryModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  public cardClick(oeventSummary: OEventResultSummaryModel){
    this.select.next(oeventSummary);
  }
}
