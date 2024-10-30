import { IGenre } from "./Genre.types";

export interface IProductionCompany {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  genre_ids: Array<number>;
  genres?: Array<IGenre>
  overview: string;
  vote_average: number;
  backdrop_path?: string;
  poster_path?: string;
  origin_country?: Array<string>;
  production_companies?: Array<IProductionCompany>;
}

export interface ISeason {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

export interface ISerie {
  id: number;
  name: string;
  title: string;
  release_date: string;
  genre_ids: Array<number>;
  genres?: Array<IGenre>
  original_name: string;
  overview: string;
  vote_average: number;
  first_air_date: string;
  backdrop_path?: string;
  poster_path?: string;
  seasons: Array<ISeason>
  origin_country: Array<string>
  production_companies?: Array<IProductionCompany>;
}
