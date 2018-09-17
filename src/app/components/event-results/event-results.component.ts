import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';

@Component({
  selector: 'penoc-event-results',
  templateUrl: './event-results.component.html',
  styleUrls: ['./event-results.component.css']
})
export class EventResultsComponent implements OnInit {
  private oevent:OEventModel;
  private subscription: any;
  constructor(private route:ActivatedRoute, private oeventService: OEventService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      let id = params['id'];
      this.oeventService.getOEvent(id).then(obs => {
        obs.subscribe(data => {
          this.oevent = data.json()[0];
        })
      })
    })
  }

}
