import { Component, OnInit } from '@angular/core';
import { OEventService } from '../../../penoc-sdk/services/oevent.service';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';
import { OEventResultSummaryModel } from '../../../penoc-sdk/models/oevent-result-summary.model';

@Component({
  selector: 'penoc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  public recentOEventResults: (OEventResultSummaryModel)[] = []; 
  
  constructor(public oEventService: OEventService) { }

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

}
