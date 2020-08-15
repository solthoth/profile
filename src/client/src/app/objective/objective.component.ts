import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {

  fullName: string;
  profile: Profile;
  objectives: string[];

  constructor(private profileService: ProfileService) { 
    this.setProperties();
  }

  ngOnInit(): void {
  }

  setProperties(): void {
    this.getProfile();
    this.getObjectives();
    this.fullName = `${this.profile.firstName} ${this.profile.lastName}`;
  }

  getProfile(): void {
    this.profileService
      .getProfile()
      .subscribe(p => this.profile = p);
  }

  getObjectives(): void {
    this.profileService
      .getObjectives()
      .subscribe(o => this.objectives = o);
  }

}
