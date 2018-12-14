import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventModel } from 'penoc-sdk/models/oevent.model';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';
import { NewsService } from 'penoc-sdk/services/news.service';
import { NewsModel } from 'penoc-sdk/models/news.model';

@Component({
  selector: 'penoc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  private cardData: (any)[] = []; 
  private yearsDataLoaded: number = 0;

  constructor(public router: Router, public oEventService: OEventService, public newsService: NewsService) { }

  ngOnInit() {
    window.addEventListener('scroll', this.createScrollHandler(this), true);
    this.loadMoreCardData(1);
    this.loadMoreCardData(1);
  }

  private createScrollHandler(thisControl): ()=>void{
    //event handler to implement infinte scroll as user approaches bottom of page
    //implemented as a closure to ensure access to 'this' (rather than the window) at run time
    return function(){
      if (document.body.scrollHeight - window.scrollY - window.innerHeight < 400){
        thisControl.loadMoreCardData(1);
      }
    }
  }

  private loadMoreCardData(yearsToLoad: number){

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

  public calendarEventClick(oevent: OEventModel){
    this.router.navigate(['/event-notices', oevent.id]);
  }

  public eventResultsClick(oevent: OEventResultSummaryModel){
    this.router.navigate(['/event-results', oevent.oEvent.id]);
  }

  public newsClick(newsItem: NewsModel){
    this.router.navigate(['/news', newsItem.id]);
  }
}
