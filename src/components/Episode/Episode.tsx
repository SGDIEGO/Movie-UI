import { IEpisode } from "../../types/Season.types";

interface IEpisodeProps {
    data: IEpisode
}

export default function EpisodeComponent(props: IEpisodeProps) {
    return <button className="flex gap-3 bg-[#D9D9D9] text-black rounded-sm px-3 py-2 text-start place-items-center hover:bg-red-500 hover:text-white">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
        </span>
        <span>{props.data.name}</span>
    </button>
}