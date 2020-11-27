import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from 'src/app/models/movie-detail.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Cast } from 'src/app/models/credit.model';

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
    this.moviesService.getMovieDetail(id).subscribe((movie) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
    });
    this.moviesService.getMovieCredits(id).subscribe((cast) => {
      this.cast = cast;
      console.log(cast);
    });
  }

  onReturn(): void {
    this.location.back();
  }
}
