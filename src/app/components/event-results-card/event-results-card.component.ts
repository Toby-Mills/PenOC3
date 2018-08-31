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

  public eventResultSummary: OEventResultSummaryModel;

  constructor(public oEventService: OEventService) {
   }

  ngOnInit() {
    this.oEventService.getOEventResultSummary(666)
    .then(data => {
      data.subscribe(response => {
        this.eventResultSummary = response.json()[0];
        console.log(this.eventResultSummary);
      });
    });
  }

}
