import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';
import { Profile } from '../models/profile';
import { JOBS, ACCOMPLISHMENTS, PROFILE, OBJECTIVES } from '../models/mock-data';
import { Information } from '../models/information';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  public getAccomplishments(): Observable<string[]> {
    return of(ACCOMPLISHMENTS);
  }

  public getJobs(): Observable<Job[]>{
    return of(JOBS);
  }

  public getObjectives(): Observable<string[]> {
    return of(OBJECTIVES);
  }

  public getProfile(): Observable<Profile> {
    return of(PROFILE);
  }

  public getSkills(): Observable<Information> {
    return of({} as Information);
  }

  public getHobbies(): Observable<Information> {
    return of({} as Information);
  }

  public getEducations(): Observable<Information> {
    return of({} as Information);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
