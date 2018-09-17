import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';
import { OEventResultSummaryModel } from '../../../penoc-sdk/models/oevent-result-summary.model';
import { ModalManagerService } from '../../services/modal-manager.service';

@Component({
  selector: 'penoc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  public recentOEventResults: (OEventResultSummaryModel)[] = []; 
  private oeventNotice: OEventModel;

  constructor(public router: Router, public oEventService: OEventService, public modalManagerService: ModalManagerService) { }

  ngOnInit() {
    var firstDate: Date = new Date()
    firstDate.setFullYear(firstDate.getFullYear() -4);
    this.oEventService.getOEvent(null,null,null, firstDate, new Date() ).then(data => {
      data.subscribe(response => {
        this.loadEventResults(response.json());
      });
    })
  }

  private loadEventResults(eventList: OEventModel[]){
    if (eventList.length > 0){
      var oevent = eventList.pop();
      this.oEventService.getOEventResultSummary(oevent.id).then(data =>{
        data.subscribe(response => {
          var eventResultSummary: OEventResultSummaryModel;
          eventResultSummary = response.json()[0];
          if (eventResultSummary.courseResults.length > 0){
            this.recentOEventResults.push(response.json()[0]);}
          this.loadEventResults(eventList);
        })
      })
    }
  }

  private calendarEventClick(oevent: OEventModel){
    this.router.navigate(['/event-notices', oevent.id]);
  }

  private eventResultsClick(oevent: OEventResultSummaryModel){
    this.router.navigate(['/event-results', oevent.OEvent.id]);
  }

}
