import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { EventNoticeComponent } from './components/event-notice/event-notice.component';
import { EventResultsComponent } from './components/event-results/event-results.component';
import { WhatIsComponent } from './components/what-is/what-is.component';
import { AboutTheClubComponent } from './components/about-the-club/about-the-club.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ResultsComponent } from './components/results/results.component';
import { PermanentCoursesComponent } from './components/permanent-courses/permanent-courses.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'event-notices/:id', component: EventNoticeComponent },
  { path: 'event-results/:id', component: EventResultsComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'news/:id', component: NewsItemComponent },
  { path: 'what-is', component: WhatIsComponent },
  { path: 'about-the-club', component: AboutTheClubComponent },
  { path: 'permanent-courses', component: PermanentCoursesComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
