import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';
import { EventFilterPipe } from '../../pipes/event-filter.pipe';

@Component({
  selector: 'penoc-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
public eventList: Array<OEventResultSummaryModel>;
public searchString: string = '';

  constructor(public router: Router, public eventService:OEventService) { }

  ngOnInit() {
    this.eventService.getOEventResultSummaries(null, null, null, new Date(), 1).subscribe(result => {this.eventList = result.json(); console.log(this.eventList.length)});
  }

  public eventResultsClick(oevent: OEventResultSummaryModel){
    this.router.navigate(['/event-results', oevent.oEvent.id]);
  }
  
}
