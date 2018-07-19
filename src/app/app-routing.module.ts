import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HealthWellComponent} from './health-well/health-well.component';

const routes: Routes = [
  { path: 'health', component: HealthWellComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
