import { Component, OnInit } from '@angular/core';
import { ResultService } from 'penoc-sdk/services/result.service';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventModel } from 'penoc-sdk/models/oevent.model';

@Component({
  selector: 'penoc-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
public eventList: Array<OEventModel>;

  constructor(public eventService:OEventService) { }

  ngOnInit() {
    this.eventService.getOEventResultSummaries(null, 'toby', null, null, null).subscribe(result => {this.eventList = result.json()});
  }

}
