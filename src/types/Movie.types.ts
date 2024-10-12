export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  genre_ids: Array<number>;
  overview: string;
  vote_average: number;
  backdrop_path?: string;
  poster_path?: string;
  origin_country?: Array<string>;
  production_companies?: Array<string>
}

export interface ISerie {
  id: number;
  name: string;
  genre_ids: Array<number>;
  original_name: string;
  overview: string;
  vote_average: number;
  first_air_date: string;
  backdrop_path?: string;
  poster_path?: string;
}
