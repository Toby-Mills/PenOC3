import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { OEventModel } from 'penoc-sdk/models/oevent.model';
import { OEventResultSummaryModel } from 'penoc-sdk/models/oevent-result-summary.model';
import { NewsService } from 'penoc-sdk/services/news.service';
import { NewsModel } from 'penoc-sdk/models/news.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'penoc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  constructor(public router: Router, public oEventService: OEventService, public newsService: NewsService, public homeService: HomeService) { }

  ngOnInit() {
    if (this.homeService.yearsDataLoaded == 0){
      this.loadMoreCardData(1);
      this.loadMoreCardData(1);
    }
    window.addEventListener('scroll', this.createScrollHandler(this), true);
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
    fromDate.setFullYear(fromDate.getFullYear() - (this.homeService.yearsDataLoaded + yearsToLoad));
    toDate.setFullYear(toDate.getFullYear() - (this.homeService.yearsDataLoaded));

    this.newsService.getNewsItems(null,fromDate, toDate).subscribe(response => {
      this.homeService.cardData = this.homeService.cardData.concat(response.json());
      this.sortCardData();
      this.oEventService.getOEvent( null, null, null, fromDate, toDate).subscribe(response => {
        this.addOEventResultSummaryCards(response.json());
        this.sortCardData();
        this.loadEventResults(response.json());
      });
    })
    this.homeService.yearsDataLoaded = this.homeService.yearsDataLoaded + yearsToLoad;
  }

  private loadEventResults(eventList: OEventModel[]){
    eventList.forEach((oevent: OEventModel)=>{
      this.oEventService.getOEventResultSummary(oevent.id, 1).subscribe(response => {
        var eventResultSummary: OEventResultSummaryModel;
        eventResultSummary = response.json()[0];
        let foundIndex = this.homeService.cardData.findIndex(function(element:OEventResultSummaryModel):boolean{
          if(element.oEvent){
            return (oevent.id == element.oEvent.id);
          }else{
            return false;
          }
        });
        if(eventResultSummary){
          this.homeService.cardData[foundIndex] = eventResultSummary;
        }else{
          this.homeService.cardData.splice(foundIndex,1);
        }
      })
    })
  }

  private sortCardData(){

    this.homeService.cardData.sort((a, b) =>{
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
      this.homeService.cardData.push(resultSummary);
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
