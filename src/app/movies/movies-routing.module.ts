import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Route[] = [
  {
    path: 'home',
    component: MoviesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
