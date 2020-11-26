import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/billboard';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public billboard: Movie[] = [];

  constructor(private movieService: MoviesService) {
    this.movieService.getBillboard().subscribe((resp) => {
      this.billboard = resp.results;
    });
  }

  ngOnInit(): void {}
}
