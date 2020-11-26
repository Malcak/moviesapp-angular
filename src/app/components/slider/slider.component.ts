import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/billboard';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input()
  movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
}
