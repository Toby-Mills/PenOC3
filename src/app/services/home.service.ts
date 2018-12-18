import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  public cardData: (any)[] = []; 
  public yearsDataLoaded: number = 0;

  constructor() { }

}
