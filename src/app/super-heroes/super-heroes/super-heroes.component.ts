import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceSuperHeroesService } from 'src/app/services/service-super-heroes.service';

@Component({
  selector: 'app-super-heroes',
  templateUrl: './super-heroes.component.html',
  styleUrls: ['./super-heroes.component.scss']
})
export class SuperHeroesComponent implements OnInit {

  constructor(public _superHeroeService: ServiceSuperHeroesService) { }
  heroes: Array<object>
  ngOnInit() {
    this.listSuperHeroes()
  }

  listSuperHeroes(): void {
    this._superHeroeService.getHeroes().subscribe(result => {
      this.heroes = result
    })
  }
}
