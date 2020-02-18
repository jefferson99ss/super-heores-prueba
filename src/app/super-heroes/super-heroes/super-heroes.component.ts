import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from 'src/app/services/service-super-heroes.service';
import * as _ from 'underscore';


@Component({
  selector: 'app-super-heroes',
  templateUrl: './super-heroes.component.html',
  styleUrls: ['./super-heroes.component.scss']
})
export class SuperHeroesComponent implements OnInit {

  heroes: Array<object> = []
  heroesLocalStorage: object = {}
  constructor(public _superHeroeService: SuperHeroesService) {
    this.heroesLocalStorage = (JSON.parse(localStorage.getItem('heroes'))) ? (JSON.parse(localStorage.getItem('heroes'))) : {};

  }

  ngOnInit() {
    this.listSuperHeroes()
  }

  /* Metodo para obtener los resultado que retonar el servicio  */
  listSuperHeroes(): void {
    this._superHeroeService.getHeroes().subscribe(result => {
      _.map(result, element => {
        element['id'] = element['name'].replace(/\s/g, '');
        return element;
      });
      this.heroes = result
    })
  }

  like(heroe): void {
    this.heroesLocalStorage = this._superHeroeService.actionLike(heroe);
  }

}
