import { Component, OnInit, Input } from '@angular/core';
import { OEventModel } from '../../../penoc-sdk/models/oevent.model';

@Component({
  selector: 'penoc-event-notice',
  templateUrl: './event-notice.component.html',
  styleUrls: ['./event-notice.component.css']
})
export class EventNoticeComponent implements OnInit {
@Input() public oevent:OEventModel;

  constructor() { }

  ngOnInit() {
  }

}
