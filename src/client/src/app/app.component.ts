import { Component } from '@angular/core';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carlos Barajas';
  LinkedInProfile = 'https://www.linkedin.com/in/solthoth/'

  constructor(private profileService: ProfileService){
    
  }
}
