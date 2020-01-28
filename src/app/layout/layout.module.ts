import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SuperHeroesComponent } from '../super-heroes/super-heroes/super-heroes.component';
import { DescriptionSuperHereoeComponent } from '../super-heroes/description-super-hereoe/description-super-hereoe.component';
import { HomeComponent } from '../home/home.component';

import {NgxPaginationModule} from 'ngx-pagination'

/* Material modules */
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [LayoutComponent, HomeComponent, SuperHeroesComponent, DescriptionSuperHereoeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    MatProgressSpinnerModule
  ]
})
export class LayoutModule { }
