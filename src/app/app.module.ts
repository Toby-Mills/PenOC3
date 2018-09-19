import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app/app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventResultsCardComponent } from './components/event-results-card/event-results-card.component';
import { PenocSdkModule } from './../../node_modules/penoc-sdk/penoc-sdk.module';
import { EventCardListComponent } from './components/event-card-list/event-card-list.component';
import { DateStringPipe } from './pipes/date.pipe';
import { ResultTimePipe } from './pipes/result-time.pipe';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { WhatIsComponent } from './components/what-is/what-is.component';
import { AboutTheClubComponent } from './components/about-the-club/about-the-club.component';
import { EventNoticeComponent } from './components/event-notice/event-notice.component';
import { ModalManagerService } from './services/modal-manager.service';
import { EventResultsComponent } from './components/event-results/event-results.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventResultsCardComponent,
    EventCardListComponent,
    DateStringPipe,
    ResultTimePipe,
    CalendarComponent,
    HomeComponent,
    WhatIsComponent,
    AboutTheClubComponent,
    EventNoticeComponent,
    EventResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PenocSdkModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ModalManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
