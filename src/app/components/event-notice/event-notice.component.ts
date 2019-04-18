import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OEventModel } from 'penoc-sdk/models/oevent.model';
import { OEventService } from 'penoc-sdk/services/oevent.service';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'penoc-event-notice',
  templateUrl: './event-notice.component.html',
  styleUrls: ['./event-notice.component.css']
})
export class EventNoticeComponent implements OnInit {
  @Input() public oevent:OEventModel;
  private subscription: any;
  private env: any;
  private mapURL_Sanitized: SafeResourceUrl;

  constructor(private route:ActivatedRoute, private oeventService: OEventService,  public sanitizer:DomSanitizer) {
    this.env = environment;
   }

  ngOnInit() {
    var mapURL: string;

    this.subscription = this.route.params.subscribe(params => {
      let id = params['id'];
      this.oeventService.getOEvent(id).subscribe(data => {
        this.oevent = data.json()[0];
        mapURL = 'https://www.google.com/maps/embed/v1/place?q=' 
        + this.oevent.coordinateLatitude + '%2C%20' +  this.oevent.coordinateLongitude 
        + '&zoom=10&key=' + this.env.googleMapsApiKey;

        this.mapURL_Sanitized =  this.sanitizer.bypassSecurityTrustResourceUrl(mapURL);      
      })
    })
  }

}
