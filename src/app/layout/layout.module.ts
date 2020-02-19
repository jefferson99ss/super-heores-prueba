import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SuperHeroesComponent } from '../super-heroes/super-heroes/super-heroes.component';
import { HomeComponent } from '../home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms';
import { RankingSuperHeroesComponent } from '../super-heroes/ranking-super-heroes/ranking-super-heroes.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
/* Material modules */
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [LayoutComponent, HomeComponent, SuperHeroesComponent, RankingSuperHeroesComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    SlickCarouselModule
  ]
})
export class LayoutModule { }
