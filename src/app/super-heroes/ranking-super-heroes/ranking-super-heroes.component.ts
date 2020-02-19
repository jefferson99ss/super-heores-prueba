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
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  constructor() {
    this.heroesLocalStorage = (JSON.parse(localStorage.getItem('heroes')))
  }
  ngOnInit() {
    this.calcualteRanking()
   if( screen.width > 998){
     this.slideConfig = {"slidesToShow": 2, "slidesToScroll": 2}
   }
  }
  /**
   * Metodo para calcular el ranking de los 10 super heores mas mas votados 
   * */ 
   calcualteRanking() {
     _.each(_.keys(this.heroesLocalStorage), element => {
      const posicion = _.sortedIndex(this.arrayRankingHeroes, this.heroesLocalStorage[element], 'like');
      this.arrayRankingHeroes.splice(posicion, 0, this.heroesLocalStorage[element]);
    })

    this.arrayRankingHeroes = this.arrayRankingHeroes.reverse().slice(0, 10)
  }
}
