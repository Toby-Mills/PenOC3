import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'penoc-about-the-club',
  templateUrl: './about-the-club.component.html',
  styleUrls: ['./about-the-club.component.css']
})
export class AboutTheClubComponent implements OnInit {
@Input() summary: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
