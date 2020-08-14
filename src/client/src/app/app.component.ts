import { Component } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { Job } from './models/job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carlos Barajas';
  LinkedInProfile = 'https://www.linkedin.com/in/solthoth/'

  jobs : Job[];
  constructor(private profileService: ProfileService){
    this.getJobs();
  }

  getJobs(): void {
    this.profileService.getJobs()
      .subscribe(j => this.jobs = j);
  }
}
