import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';
import { JOBS, ACCOMPLISHMENTS } from '../models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  public getJobs(): Observable<Job[]>{
    return of(JOBS);
  }

  public getAccomplishments(): Observable<string[]> {
    return of(ACCOMPLISHMENTS);
  }
}
