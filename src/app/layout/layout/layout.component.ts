import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route);
    
    this.route.data.subscribe(data => console.log(data));
  }

}
