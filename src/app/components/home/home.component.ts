import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventModel } from 'penoc-sdk/models/oevent.model';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';
import { NewsService } from 'penoc-sdk/services/news.service';

@Component({
  selector: 'penoc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  private cardData: (any)[] = []; 
  private yearsLoaded: number = 0;

  constructor(public router: Router, public oEventService: OEventService, public newsService: NewsService) { }

  ngOnInit() {
    window.addEventListener('scroll', this.createScrollHandler(this), true);
    this.loadMoreCardData(2);
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

  private loadMoreCardData(years: number){

    var fromDate: Date = new Date()
    var toDate: Date = new Date()
    fromDate.setFullYear(fromDate.getFullYear() - (this.yearsLoaded + years));
    toDate.setFullYear(toDate.getFullYear() - (this.yearsLoaded));

    this.newsService.getNewsItems(null,fromDate, toDate).subscribe(response => {
      this.cardData = this.cardData.concat(response.json());
      this.sortCardData();
      this.oEventService.getOEvent( null, null, null, fromDate, toDate).subscribe(response => {
        this.addOEventResultSummaryCards(response.json());
        this.sortCardData();
        this.loadEventResults(response.json());
      });
    })
    this.yearsLoaded = this.yearsLoaded + years;
  }

  private loadEventResults(eventList: OEventModel[]){
    eventList.forEach((oevent: OEventModel)=>{
      this.oEventService.getOEventResultSummary(oevent.id).subscribe(response => {
        var eventResultSummary: OEventResultSummaryModel;
        eventResultSummary = response.json()[0];
        let foundIndex = this.cardData.findIndex(function(element:OEventResultSummaryModel):boolean{
          if(element.oEvent){
            return (eventResultSummary.oEvent.id == element.oEvent.id);
          }else{
            return false;
          }
        });
        var hasResults = this.oEventHasResults(eventResultSummary);
        if(hasResults){
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

  private oEventHasResults(oevent:OEventResultSummaryModel):boolean{
    var hasResults: boolean =false;

    oevent.courseResults.forEach(courseResult => {
      if (courseResult.results.length > 0){
        hasResults = true;
      }
    })
    return hasResults;
  }

  private calendarEventClick(oevent: OEventModel){
    this.router.navigate(['/event-notices', oevent.id]);
  }

  private eventResultsClick(oevent: OEventResultSummaryModel){
    this.router.navigate(['/event-results', oevent.oEvent.id]);
  }
}
