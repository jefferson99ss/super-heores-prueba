import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSuperHeroesService {

  constructor(private http: HttpClient) {

   }

  getHeroes(): Observable<any> {
    return this.http.get('http://35.162.46.100/superheroes/')
  }

}
