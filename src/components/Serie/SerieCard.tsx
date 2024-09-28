interface ISerie {
  id: number
  name: string
  backdrop_path:string
}

export default function SerieCard({serie} : {serie:ISerie}) {
  return (
    <div className="grid w-[256px] hover:cursor-pointer">
      {/* Image */}
      <div className="h-[392px] w-full relative">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={"https://image.tmdb.org/t/p/w500/" + serie.backdrop_path}
          alt="movie_img"
        />
        <span className="bg-red-500 rounded-lg absolute top-0 left-0">EP 1</span>
      </div>

      {/* Contains */}
      <div className="grid grid-cols-2 text-[10px] items-center pt-1.5">
        <h5>{serie.name}</h5>
        <div className="flex justify-end gap-2">
          <span className="bg-red-500 p-0.5 rounded-md">HD</span>
          <span className="border border-red-500 p-0.5 rounded-md">
            Season 1
          </span>
        </div>
      </div>
    </div>
  );
}
