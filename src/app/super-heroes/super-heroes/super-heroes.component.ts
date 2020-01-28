import { Component, OnInit } from '@angular/core';
import { ServiceSuperHeroesService } from 'src/app/services/service-super-heroes.service';

@Component({
  selector: 'app-super-heroes',
  templateUrl: './super-heroes.component.html',
  styleUrls: ['./super-heroes.component.scss']
})
export class SuperHeroesComponent implements OnInit {

  constructor(public _superHeroeService: ServiceSuperHeroesService) { }
  heroes: Array<object> = []
  
  ngOnInit() {
    setTimeout(() => {
      this.listSuperHeroes()
    }, 100);
  }

  listSuperHeroes(): void {
    this._superHeroeService.getHeroes().subscribe(result => {
      this.heroes = result
    })
  }
}
