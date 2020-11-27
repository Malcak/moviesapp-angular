import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/billboard.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[] = [];
  public mySwiper: Swiper | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  onSlideNext(): void {
    this.mySwiper?.slideNext();
  }
  onSlidePrev(): void {
    this.mySwiper?.slidePrev();
  }
}
