import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {

  jobs: Job[];
  constructor(private profileService: ProfileService) { 
    this.getJobs();
  }

  ngOnInit(): void {
  }

  getJobs(): void {
    this.profileService.getJobs()
      .subscribe(j => this.jobs = j);
  }

}
