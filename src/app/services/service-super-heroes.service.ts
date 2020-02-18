import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  heroesLocalStorage: object = {}

  constructor(private http: HttpClient) {
    this.heroesLocalStorage = (JSON.parse(localStorage.getItem('heroes')))
  }

  /** 
   * Metodo que hace la peticion para obtener los super heroes por medio del metodo GET,
   * retorna un observable con el array de datos
   */
  getHeroes(): Observable<any> {
    return this.http.get('http://35.162.46.100/superheroes/')
  }

  /**
   * metodo que se encarga de verificar si el heroe al cual se le dio like ya existe en el localeStorage,
   *  si es verdadero agrega un like, si no lo crea y retorna el objeto de heroes en el localeStorage.
   */
  actionLike(heroe) {
    if (this.heroesLocalStorage) {
      if (this.heroesLocalStorage[heroe.id]) {
        this.heroesLocalStorage[heroe.id]['like']++
      } else {
        const heroeLocal = {
          nombre: heroe.name
        };
        heroeLocal['like'] = 1;
        this.heroesLocalStorage[heroe.id] = heroeLocal;
      }
      localStorage.setItem('heroes', JSON.stringify(this.heroesLocalStorage));
    } else {
      const heroeLocal = {
        nombre: heroe.name
      };
      heroeLocal['like'] = 1;
      this.heroesLocalStorage = {};
      this.heroesLocalStorage[heroe.id] = heroeLocal;
      localStorage.setItem('heroes', JSON.stringify(this.heroesLocalStorage));
    }

    return this.heroesLocalStorage;
  }

}
