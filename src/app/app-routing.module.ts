import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HealthWellComponent} from './health-well/health-well.component';
import {RecipesComponent} from './recipes/recipes.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent},
  { path: 'health', component: HealthWellComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
