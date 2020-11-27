import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from 'src/app/models/movie-detail.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Cast } from 'src/app/models/credit.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movie: MovieDetail | null | undefined;
  public cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.moviesService.getMovieDetail(id),
      this.moviesService.getMovieCredits(id),
    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
      this.cast = cast;
    });
  }

  onReturn(): void {
    this.location.back();
  }
}
