import "./Movie.css";

export default function MovieCard() {
  return (
    <div className="grid w-[150px]">
      {/* Image */}
      <div className="h-[200px] w-full">
        <img
          className="h-full w-full rounded-lg"
          src="https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg"
          alt="movie_img"
        />
      </div>

      {/* Contains */}
      <div className="grid grid-cols-2 text-[10px] items-center pt-1.5">
        <h5>TTT</h5>
        <div className="flex justify-end gap-2">
          <span className="bg-red-500 p-0.5 rounded-md">HD</span>
          <span className="border border-red-500 p-0.5 rounded-md">
            3:20:00
          </span>
        </div>
      </div>
    </div>
  );
}
