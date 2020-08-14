import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private JOBS: Job[] = [
    { image: '...',  title: 'Grunt Engineer', company: 'Epic Software', content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', startDate: new Date('2020-02-02'), endDate: new Date('2020-02-03') },
    { image: '...',  title: 'Grunt Engineer', company: 'Epic Software', content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', startDate: new Date('2020-02-02'), endDate: new Date('2020-02-03') },
    { image: '...',  title: 'Grunt Engineer', company: 'Epic Software', content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', startDate: new Date('2020-02-02'), endDate: new Date('2020-02-03') }
  ];
  constructor() { }

  public getJobs(): Observable<Job[]>{
    return of(this.JOBS)
  }
}
