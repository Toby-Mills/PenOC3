import { Injectable } from '@angular/core';

@Injectable()
export class ModalManagerService {
  
  public modalOpen: boolean = false;
  
  constructor() { }

  public modalOpened(){
    this.modalOpen = true;
  }

  public modalClosed(){
    this.modalOpen = false;
  }
}
