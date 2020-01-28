import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FADE_ANIMATION } from '../animations/animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    FADE_ANIMATION
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
