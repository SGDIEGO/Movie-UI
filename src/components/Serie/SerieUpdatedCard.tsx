interface ISerie {
  id: number;
  name: string;
  first_air_date: string;
  backdrop_path: string;
}

export default function SerieUpdatedCard({ serie }: { serie: ISerie }) {
  return (
    <div className="flex items-center gap-4 w-[206px] h-[103px] text-sm">
      <div className=" w-[64px] h-full">
        <img
          className="w-full h-full object-cover"
          src={"https://image.tmdb.org/t/p/w500/" + serie.backdrop_path}
          alt=""
        />
      </div>
      <div>
        <h5>{serie.name}</h5>
        <p>Series/ S 2/EP 9</p>
        <span>{serie.first_air_date}</span>
      </div>
    </div>
  );
}
