import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [NavbarComponent, SliderComponent, MoviesPosterGridComponent],
  imports: [CommonModule, RouterModule, RatingModule],
  exports: [NavbarComponent, SliderComponent, MoviesPosterGridComponent],
})
export class ComponentsModule {}
