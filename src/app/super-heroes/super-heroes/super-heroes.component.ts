import { Component, OnInit } from '@angular/core';
import { ServiceSuperHeroesService } from 'src/app/services/service-super-heroes.service';
import * as _ from 'underscore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-super-heroes',
  templateUrl: './super-heroes.component.html',
  styleUrls: ['./super-heroes.component.scss']
})
export class SuperHeroesComponent implements OnInit {

  heroes: Array<object> = []
  heroesLocalStorage: object = {}
  term:string
  constructor(public _superHeroeService: ServiceSuperHeroesService, private _router: Router) {
    this.heroesLocalStorage = (JSON.parse(localStorage.getItem('heroes'))) ? (JSON.parse(localStorage.getItem('heroes'))) : {};

  }

  ngOnInit() {
    this.listSuperHeroes()
  }

  listSuperHeroes(): void {
    this._superHeroeService.getHeroes().subscribe(result => {
      _.map(result, element => {
        element['id'] = element['name'].replace(/\s/g, '');
        return element;
      });
      this.heroes = result
    })
  }

  likeAndDontLike(heroe, action): void {
    this.heroesLocalStorage = this._superHeroeService.actionLike(heroe, action);
  }

  seeMore(heroe, i) {
    heroe = JSON.stringify(heroe);
    this._router.navigateByUrl(`super-heroe/${i}?datos=${heroe}`);
  }
}
