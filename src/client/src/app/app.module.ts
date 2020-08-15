import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobsComponent } from './jobs/jobs.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { ObjectiveComponent } from './objective/objective.component';
import { SmallViewComponent } from './small-view/small-view.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    AccomplishmentsComponent,
    ObjectiveComponent,
    SmallViewComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
