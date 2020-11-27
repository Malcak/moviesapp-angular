import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSliderComponent } from './cast-slider/cast-slider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    MoviesPosterGridComponent,
    CastSliderComponent,
  ],
  imports: [CommonModule, RouterModule, RatingModule, PipesModule],
  exports: [
    NavbarComponent,
    SliderComponent,
    MoviesPosterGridComponent,
    CastSliderComponent,
  ],
})
export class ComponentsModule {}
