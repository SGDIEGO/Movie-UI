interface IMovie {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
  genre_ids: number[];
}

export default function MovieTrendingCard({ movie }: { movie: IMovie }) {
  // Render the genres for the movie
  function RenderGenres() {
    // Fetch the genres data from an API (e.g., using useEffect hook)
    const genres = movie.genre_ids
      .slice(0, 3)
      .map((genreId: number, index: number) => (
        <span className="bg-red-500 rounded-md p-2">Action</span>
      ));

    return genres;
  }

  return (
    <div className="h-[341px] w-[352px] hover:cursor-pointer">
      <div className="relative h-[293px] w-full">
        <img
          className="w-full h-full object-cover"
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="overflow-hidden text-ellipsis w-[200px]">
          {movie.title}
        </span>
        <div className="flex justify-between gap-1">
          <RenderGenres />
        </div>
      </div>
    </div>
  );
}
