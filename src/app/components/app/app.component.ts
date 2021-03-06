import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalManagerService } from '../../services/modal-manager.service';

@Component({
  selector: 'penoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showMenu: boolean = false;

  public menuClick(){
    this.showMenu = !this.showMenu;
  }

  public constructor(private router: Router, public modalManagerService:ModalManagerService){
    router.events.subscribe((val) => {
      // see also 
      this.showMenu = false; 
  })
  }
}
