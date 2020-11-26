import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Billboard, Movie } from '../models/billboard';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private billboardPage = 1;
  public downloading = false;

  constructor(private http: HttpClient) {}

  get params(): {} {
    return {
      api_key: '37a083efdefcd3663056e6c88ce1d80e',
      language: 'es-Es',
      page: this.billboardPage.toString(),
    };
  }

  getBillboard(): Observable<Movie[]> {
    // if (this.downloading) {
    //   return of([]);
    // }
    this.downloading = true;
    return this.http
      .get<Billboard>(`${this.baseUrl}/movie/now_playing?`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.billboardPage += 1;
          this.downloading = false;
        })
      );
  }
}
