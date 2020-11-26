import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/billboard';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public filter = '';
  public movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.filter = params.filter;
      this.moviesService.searchMovies(params.filter).subscribe((resp) => {
        this.movies = resp;
      });
    });
  }
}
