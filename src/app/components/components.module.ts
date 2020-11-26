import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [NavbarComponent, SliderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SliderComponent],
})
export class ComponentsModule {}
