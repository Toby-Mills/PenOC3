import { Injectable } from '@angular/core';
import { OEventModel } from 'penoc-sdk/models/oevent.model';

@Injectable()
export class CalendarService {
  public oevents: OEventModel[] = [];

  constructor() { }

}
