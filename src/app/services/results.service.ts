import { Injectable } from '@angular/core';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';
import { OEventService } from 'penoc-sdk/services/oevent.service';

@Injectable()
export class ResultsService {
public searchString: String = '';
public resultSummaries: OEventResultSummaryModel[] = [];

  constructor(public eventService: OEventService) { }

  public loadResultSummaries(){
    this.eventService.getOEventResultSummaries(null, null, null, new Date(), 1).subscribe(result => {this.resultSummaries = result.json();});
  }
}
