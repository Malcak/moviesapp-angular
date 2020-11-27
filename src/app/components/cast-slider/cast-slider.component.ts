import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/models/credit.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.scss'],
})
export class CastSliderComponent implements OnInit, AfterViewInit {
  @Input() cast: Cast[];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }
}
