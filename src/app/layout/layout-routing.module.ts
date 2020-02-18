import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SuperHeroesComponent } from '../super-heroes/super-heroes/super-heroes.component';
import { RankingSuperHeroesComponent } from '../super-heroes/ranking-super-heroes/ranking-super-heroes.component';




const routes: Routes = [
	{
		path: '', component: LayoutComponent,
		children: [
			{ path: "", component: HomeComponent, data: { animation: 'home' } },
			{ path: "super-heroes", component: SuperHeroesComponent, data: { animation: 'super-heroes' } },
			{ path: "ranking", component: RankingSuperHeroesComponent, data: { animation: 'super-heroes-ranking' } },

		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule { }