import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'penoc-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public router: Router, public resultsService:ResultsService) {
   }

  ngOnInit() {
    if (this.resultsService.resultSummaries.length === 0){
      this.resultsService.loadResultSummaries();
    }
  }

  public eventResultsClick(oevent: OEventResultSummaryModel){
    this.router.navigate(['/event-results', oevent.oEvent.id]);
  }
  
}
