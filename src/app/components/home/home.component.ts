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
      this.homeService.loadMoreCardData(1);
      this.homeService.loadMoreCardData(1);
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
