import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billboard } from '../models/billboard';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getBillboard(): Observable<Billboard> {
    return this.http.get<Billboard>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=37a083efdefcd3663056e6c88ce1d80e&language=es-Es&page=1'
    );
  }
}
