import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'penoc-sdk/models/news.model';
import { NewsService } from 'penoc-sdk/services/news.service';

@Component({
  selector: 'penoc-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
public newsItem: NewsModel;

  constructor(private route:ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.loadNewsItem(id);
      })
  }

  private loadNewsItem(id: number){
    this.newsService.getNewsItems(id).subscribe(response => {
      this.newsItem = response.json()[0];
    })
  }
}
