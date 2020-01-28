import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceSuperHeroesService } from 'src/app/services/service-super-heroes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-description-super-hereoe',
  templateUrl: './description-super-hereoe.component.html',
  styleUrls: ['./description-super-hereoe.component.scss']
})
export class DescriptionSuperHereoeComponent implements OnInit {

  constructor(private _location: Location,private activateRoute: ActivatedRoute, private _seriviceSuperHeroes:ServiceSuperHeroesService) { }
  heroe:object 
  ngOnInit() {
    this.getHeroe()
  } 

  getHeroe():void{
    this.activateRoute.params.subscribe(params => {
      let idx = params['id']
      this._seriviceSuperHeroes.getHeroes().subscribe( result => {
       this.heroe = result[idx]   
      })
    })
  }

  backToPage(){
    this._location.back()
  }
}
