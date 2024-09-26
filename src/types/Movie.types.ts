interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string
  genres: Genre[];
  overview: string
  vote_average: number
  release_date: string
}
