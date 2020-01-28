import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperHeroesComponent } from '../super-heroes/super-heroes/super-heroes.component';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DescriptionSuperHereoeComponent } from '../super-heroes/description-super-hereoe/description-super-hereoe.component';



const routes: Routes = [
	{
		path: '', component: LayoutComponent,
		children: [
			{ path: "", component: HomeComponent, data: { animation: 'home' } },
			{ path: "super-heroes", component: SuperHeroesComponent, data: { animation: 'super-heroes' } },
			{ path: "super-heroe/:id", component: DescriptionSuperHereoeComponent, data: { animation: 'super-heroe' } },
		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule { }