import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-ranking-super-heroes',
  templateUrl: './ranking-super-heroes.component.html',
  styleUrls: ['./ranking-super-heroes.component.scss']
})
export class RankingSuperHeroesComponent implements OnInit {

  heroesLocalStorage: object = {}
  arrayRankingHeroes = [];
  constructor() {
    this.heroesLocalStorage = (JSON.parse(localStorage.getItem('heroes')))
  }
  ngOnInit() {
    this.calcualteRanking()
  }

  async calcualteRanking() {
    await _.each(_.keys(this.heroesLocalStorage), element => {
      const posicion = _.sortedIndex(this.arrayRankingHeroes, this.heroesLocalStorage[element], 'like');
      this.arrayRankingHeroes.splice(posicion, 0, this.heroesLocalStorage[element]);
    })

    console.log('Final no da más', this.arrayRankingHeroes);
  }

}
