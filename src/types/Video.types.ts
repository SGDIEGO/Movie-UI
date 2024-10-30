export interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: "YouTube";
  size: number;
  type: "Teaser" | "Trailer" | "Featurette" | "Clip" | "Behind the Scenes";
  official: boolean;
  published_at: string;
  id: string;
}
