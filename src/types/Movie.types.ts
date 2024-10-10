export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
  genre_ids: Array<number>;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface ISerie {
  id: number;
  name: string;
  backdrop_path: string;
  genre_ids: Array<number>;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}
