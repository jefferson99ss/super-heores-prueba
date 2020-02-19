import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FADE_ANIMATION } from '../animations/animation';

const OPEN_STATE = "expandable-menu-open"
const CLOSE_STATE = "expandable-menu-close"


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    FADE_ANIMATION
  ]
})
export class LayoutComponent implements OnInit {
  animationMenu: boolean = false
  currentClass : string 
  constructor() { }

  ngOnInit() {
  }
  /* Metodo para abrir el menu que se muesta en dispositivos moviles */
  openMenu(){
    this.animationMenu = !this.animationMenu
    if(this.currentClass === CLOSE_STATE || this.currentClass === undefined){
      this.currentClass = OPEN_STATE
    }else{
      this.currentClass = CLOSE_STATE
    }
  }
/* Metodo que prepara el router outlet para trabajar con las animaciones de ruta */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
