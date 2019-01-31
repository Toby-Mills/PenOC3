import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApplicationConfigurationService {
  private appConfig;

  constructor(private http: Http) {}

  loadApplicationConfiguration(){
    return this.http.get('/assets/appConfig.json').toPromise()
    .then(data => {
      this.appConfig = data.json();
    })
  }

  Configuration(){
    return this.appConfig;
  }

}
