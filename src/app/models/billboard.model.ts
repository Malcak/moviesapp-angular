export interface Billboard {
  dates: Dates;
  total_results: number;
  total_pages: number;
  results: Movie[];
  page: number;
}

export interface Dates {
  minimum: Date;
  maximum: Date;
}

export interface Movie {
  original_title: string;
  title: string;
  video: boolean;
  vote_average: number;
  popularity: number;
  overview: string;
  release_date: Date;
  id: number;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: number[];
  poster_path: string;
  original_language: string;
}
