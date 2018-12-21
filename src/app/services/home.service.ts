import { Injectable } from '@angular/core';
import { NewsService } from 'penoc-sdk/services/news.service';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventModel } from 'penoc-sdk/models/oevent.model';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';

@Injectable()
export class HomeService {
  public cardData: (any)[] = []; 
  public yearsDataLoaded: number = 0;

  constructor(public oEventService: OEventService, public newsService: NewsService) { }

  public loadMoreCardData(yearsToLoad: number){

    var fromDate: Date = new Date()
    var toDate: Date = new Date()

    fromDate.setFullYear(fromDate.getFullYear() - (this.yearsDataLoaded + yearsToLoad));
    toDate.setFullYear(toDate.getFullYear() - (this.yearsDataLoaded));

    this.newsService.getNewsItems(null,fromDate, toDate).subscribe(response => {
      this.cardData = this.cardData.concat(response.json());
      this.sortCardData();
      this.oEventService.getOEvent( null, null, null, fromDate, toDate).subscribe(response => {
        this.addOEventResultSummaryCards(response.json());
        this.sortCardData();
        this.loadEventResults(response.json());
      });
    })
    this.yearsDataLoaded = this.yearsDataLoaded + yearsToLoad;
  }

  private loadEventResults(eventList: OEventModel[]){
    eventList.forEach((oevent: OEventModel)=>{
      this.oEventService.getOEventResultSummary(oevent.id, 1).subscribe(response => {
        var eventResultSummary: OEventResultSummaryModel;
        eventResultSummary = response.json()[0];
        let foundIndex = this.cardData.findIndex(function(element:OEventResultSummaryModel):boolean{
          if(element.oEvent){
            return (oevent.id == element.oEvent.id);
          }else{
            return false;
          }
        });
        if(eventResultSummary){
          this.cardData[foundIndex] = eventResultSummary;
        }else{
          this.cardData.splice(foundIndex,1);
        }
      })
    })
  }

  private sortCardData(){

    this.cardData.sort((a, b) =>{
      var dateA: Date;
      var dateB: Date;

      dateA = a.date || a.oEvent.date;
      dateB = b.date || b.oEvent.date;

      if( dateA < dateB){
        return 1;
      }else if(dateA > dateB){
        return -1;
      }else{
        return 0
      }
    })
  }

  private addOEventResultSummaryCards(eventList: OEventModel[]){
    eventList.forEach((value: OEventModel, index: number)=>{
      let resultSummary = new OEventResultSummaryModel();
      resultSummary.oEvent = value;
      this.cardData.push(resultSummary);
    })
  }
}
