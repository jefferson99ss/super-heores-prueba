import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSuperHeroesService {

  heroesLocalStorage: object = {}

  constructor(private http: HttpClient) {
    this.heroesLocalStorage = (JSON.parse(localStorage.getItem('heroes')))
  }

  getHeroes(): Observable<any> {
    return this.http.get('http://35.162.46.100/superheroes/')
  }


  actionLike(heroe, action) {
    if (this.heroesLocalStorage) {

      if (this.heroesLocalStorage[heroe.id]) {
        (this.heroesLocalStorage[heroe.id][action])
          ? this.heroesLocalStorage[heroe.id][action]++
          : this.heroesLocalStorage[heroe.id][action] = 1;
      } else {
        const heroeLocal = {
          nombre: heroe.name
        };
        heroeLocal[action] = 1;
        this.heroesLocalStorage[heroe.id] = heroeLocal;
      }
      localStorage.setItem('heroes', JSON.stringify(this.heroesLocalStorage));
    } else {

      const heroeLocal = {
        nombre: heroe.name
      };
      heroeLocal[action] = 1;
      this.heroesLocalStorage = {};
      this.heroesLocalStorage[heroe.id] = heroeLocal;
      localStorage.setItem('heroes', JSON.stringify(this.heroesLocalStorage));
    }

    return this.heroesLocalStorage;
  }

}
