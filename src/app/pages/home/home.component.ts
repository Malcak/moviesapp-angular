import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/billboard';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public billboard: Movie[] = [];
  public movies: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const position =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (position > max) {
      if (!this.movieService.downloading) {
        this.movieService.getBillboard().subscribe((resp) => {
          this.movies.push(...resp);
        });
      }
    }
  }

  constructor(private movieService: MoviesService) {
    this.movieService.getBillboard().subscribe((resp) => {
      this.billboard = resp;
    });
  }

  ngOnInit(): void {
    this.movieService.getBillboard().subscribe((resp) => {
      this.billboard = resp;
      this.movies = resp;
    });
  }
}
