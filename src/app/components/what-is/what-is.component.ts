import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'penoc-what-is',
  templateUrl: './what-is.component.html',
  styleUrls: ['./what-is.component.css']
})
export class WhatIsComponent implements OnInit {
@Input() summary: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
