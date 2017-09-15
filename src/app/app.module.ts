import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app/app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventResultsCardComponent } from './components/event-results-card/event-results-card.component';
import { PenocSdkModule } from './../penoc-sdk/penoc-sdk.module';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventResultsCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PenocSdkModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
