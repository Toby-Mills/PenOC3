import { Component, OnInit, Input } from '@angular/core';
import { ApplicationConfigurationService } from '../../services/application-configuration.service';

@Component({
  selector: 'penoc-about-the-club',
  templateUrl: './about-the-club.component.html',
  styleUrls: ['./about-the-club.component.css']
})
export class AboutTheClubComponent implements OnInit {
  @Input() summary: boolean = false;
  private configuration;

  constructor(private configurationService: ApplicationConfigurationService) { }

  ngOnInit() {
    this.configuration = this.configurationService.Configuration();
  }

}
