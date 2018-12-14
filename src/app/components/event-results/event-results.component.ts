import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';
import { OEventService } from 'penoc-sdk/services/oevent.service';

@Component({
  selector: 'penoc-event-results',
  templateUrl: './event-results.component.html',
  styleUrls: ['./event-results.component.css']
})
export class EventResultsComponent implements OnInit {
  private oeventResults:OEventResultSummaryModel;

  constructor(private route:ActivatedRoute, private oeventService: OEventService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.loadEvent(id);
      })
    }

  private loadEvent(oeventId: any){
    this.oeventService.getOEventResultSummary(oeventId).subscribe(data => {
      console.log(data.json()[0]);
      this.oeventResults = data.json()[0];
    })
  }
}
