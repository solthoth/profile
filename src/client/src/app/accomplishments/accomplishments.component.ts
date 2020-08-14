import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

  accomplishments: string[];

  constructor(private profileService: ProfileService) {
    this.getAccomplishments();
  }

  ngOnInit(): void {
  }

  getAccomplishments(): void {
    this.profileService.getAccomplishments()
      .subscribe(a => this.accomplishments = a);
  }
}
