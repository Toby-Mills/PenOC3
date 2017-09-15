import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app/app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { ApiService } from './services/api.service';
import { OEventService } from './services/oevent.service';
import { EventResultsCardComponent } from './components/event-results-card/event-results-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventResultsCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ApiService,
    OEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
