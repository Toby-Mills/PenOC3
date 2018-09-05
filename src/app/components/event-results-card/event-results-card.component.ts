import { Component, OnInit, Input } from '@angular/core';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';
import { OEventResultSummaryModel } from '../../../penoc-sdk/models/oevent-result-summary.model';

@Component({
  moduleId: module.id,
  selector: 'penoc-event-results-card',
  templateUrl: './event-results-card.component.html',
  styleUrls: ['./event-results-card.component.css']
})
export class EventResultsCardComponent implements OnInit {
  @Input() oeventSummary: OEventResultSummaryModel;

  constructor() {
   }

  ngOnInit() {
  }

}
