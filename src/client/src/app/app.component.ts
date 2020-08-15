import { Component } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { Information } from './models/information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills: Information;
  education: Information;
  hobbies: Information;

  constructor(private profileService: ProfileService){
    this.getSkills();
  }
  
  getEducations(): void {
    this.profileService
      .getEducations()
      .subscribe(e => this.education = e);
  }

  getHobbies(): void {
    this.profileService
      .getHobbies()
      .subscribe(s => this.skills = s);
  }

  getSkills(): void {
    this.profileService
      .getSkills()
      .subscribe(s => this.skills = s);
  }
}
