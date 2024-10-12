interface IAuthor {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface IReview {
  author: string;
  author_details: IAuthor;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
