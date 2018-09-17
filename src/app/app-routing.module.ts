import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { EventNoticeComponent } from './components/event-notice/event-notice.component';
import { EventResultsComponent } from './components/event-results/event-results.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'event-notices/:id', component: EventNoticeComponent},
  {path: 'event-results/:id', component: EventResultsComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
