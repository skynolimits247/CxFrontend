import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule, CoreModule]
})
export class MoviesModule {}
