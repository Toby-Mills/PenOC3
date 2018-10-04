import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsModel } from '../../../../node_modules/penoc-sdk/models/news.model'
@Component({
  selector: 'penoc-news-item-card',
  templateUrl: './news-item-card.component.html',
  styleUrls: ['./news-item-card.component.css']
})
export class NewsItemCardComponent implements OnInit {
  @Input() newsItem: NewsModel;
  @Output() select:EventEmitter<NewsModel> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  private cardClick(){
    this.select.next(this.newsItem);
  }
}
