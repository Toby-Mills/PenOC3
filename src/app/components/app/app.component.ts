import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'penoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showMenu: boolean = false;

  private menuClick(){
    this.showMenu = !this.showMenu;
  }

  public constructor(private router: Router){
    router.events.subscribe((val) => {
      // see also 
      this.showMenu = false; 
  })
  }
}
