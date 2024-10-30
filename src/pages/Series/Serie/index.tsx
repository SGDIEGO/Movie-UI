import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { ISerie } from "../../../types/Movie.types";
import { ICast } from "../../../types/Cast.types";
import { BEARER_TOKEN } from "../../../data/token";
import { IReview } from "../../../types/Review.types";
import ReviewComponent from "../../../components/Review/ReviewComponent";
import SerieCard from "../../../components/Serie/SerieCard";
import { useAppContext } from "../../../context";
import CategoryComponent from "../../../components/Category/Category";
import { useEffect, useState } from "react";
import { IEpisode } from "../../../types/Season.types";
import EpisodeComponent from "../../../components/Episode/Episode";
import { minimum } from "../../../utils/math";

interface ISeason {
    air_date: string;
    episodes: Array<IEpisode>
}

interface ICredits {
    id: number;
    cast: Array<ICast>
}

interface IRecommendations {
    page: number;
    results: Array<ISerie>;
}

interface IReviews {
    id: number;
    page: number
    results: Array<IReview>;
}

const showEpisodes = 6;

export default function Serie() {
    const appCtx = useAppContext()
    const { id } = useParams()
    const [currentSeason, setCurrentSeason] = useState(1)
    const [currentEpisodeSlice, setCurrentEpisodeSlice] = useState(0)

    useEffect(() => {
        setCurrentEpisodeSlice(0)
    }, [id])

    const serie = useFetch<ISerie>(`https://api.themoviedb.org/3/tv/${id}?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const credits = useFetch<ICredits>(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const recommendations = useFetch<IRecommendations>(`https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const reviews = useFetch<IReviews>(`https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const episodes = useFetch<ISeason>(`https://api.themoviedb.org/3/tv/${id}/season/${currentSeason}?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id, currentSeason]
    )

    const renderCast = () => {
        return credits.data?.cast?.map((cast) => <span>{cast.name}</span>)
    }

    const renderRecommendations = () => {
        return recommendations.data?.results?.map((serie) => <SerieCard key={serie.id} serie={serie} />)
    }

    const renderReviews = () => {
        return reviews.data?.results?.map((review) => <ReviewComponent key={review.id} type={"others"} data={review} />)
    }

    const renderGenres = () => {
        if (serie.data?.genres) return serie.data.genres.map(gn => gn.name)
        return appCtx.renderGenresFn(serie.data?.genre_ids)
    }

    const renderSeasons = () => {
        return serie.data?.seasons.map((season, id) => <option className="" selected={id == 0} value={id}>{season.name}</option>)
    }

    const renderEpisodes = () => {
        if (!episodes.data?.episodes) return

        const min = minimum(currentEpisodeSlice+showEpisodes, episodes.data?.episodes.length)
        
        const espisodesToRender = episodes.data?.episodes.slice(currentEpisodeSlice, min)
        return espisodesToRender?.map(episode => <EpisodeComponent data={episode} />)
    }

    const onChangeSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const id = Number(event.target.value) + 1
        setCurrentSeason(id)
    }

    const onClickEpisodesSlice = () => {
        if (!episodes.data?.episodes) return

        if ((currentEpisodeSlice+showEpisodes) > episodes.data?.episodes.length) setCurrentEpisodeSlice(0)
        else setCurrentEpisodeSlice(state => state + showEpisodes)
    }

    return (
        <div className="text-white grid gap-10 mx-40">
            <div className="w-full">
                <Link to={"http://google.com"} className="flex justify-center relative mx-auto">
                    <img className="object-cover" src={"https://image.tmdb.org/t/p/original/" + serie.data?.backdrop_path}></img>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute bottom-1/2 size-12">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>

            <section className="flex w-full gap-6 place-content-center">
                <div className="h-[576px] min-w-[352px]">
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src={"https://image.tmdb.org/t/p/original/" + serie.data?.poster_path}
                        alt=""
                    />
                </div>
                <div className="grid">
                    <div className="flex justify-between">
                        <span className="text-2xl">{serie.data?.name}</span>
                        <div>
                            <button className="button button-primary">Add to Favourite</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3 place-items-center">
                            {renderGenres().map(gn => <CategoryComponent name={gn} backgroundColor={"white"} foregroundColor={"black"} />)}
                            <span>{serie.data?.first_air_date}</span>
                            <div className="flex gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>50:38</span>
                            </div>
                            <div className="flex gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>{serie.data?.vote_average}</span>
                            </div>
                        </div>
                        <p>{serie.data?.overview}</p>
                    </div>
                    <div>
                        <table className="">
                            <tbody>
                                <tr>
                                    <td>Country</td>
                                    <td>:</td>
                                    <td>{serie.data?.origin_country ? serie.data?.origin_country[0] : "No defined"}</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>:</td>
                                    <td>{renderGenres().map(gn => <span>{gn}</span>)}</td>
                                </tr>
                                <tr>
                                    <td>Date Release</td>
                                    <td>:</td>
                                    <td>{serie.data?.first_air_date}</td>
                                </tr>
                                <tr>
                                    <td>Cast</td>
                                    <td>:</td>
                                    <td>
                                        {renderCast()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="grid gap-2">
                <div className="flex gap-2 place-items-center">
                    <select name="select_season" id="underline_select" className="block py-2.5 px-0 min-w- text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" onChange={(e) => { onChangeSeason(e) }}>
                        {renderSeasons()}
                    </select>
                </div>

                <div className="flex justify-between gap-5">
                    <div className="grid grid-cols-2 gap-5 w-full">
                        {renderEpisodes()}
                    </div>
                    <span className="place-self-center text-5xl">{(currentEpisodeSlice/showEpisodes) + 1}</span>
                </div>

                <div className="flex justify-center">
                    <button className="w-10 h-10 rounded-[50%] bg-red-500" onClick={onClickEpisodesSlice}>+</button>
                </div>
            </section>

            <section className="">
                <h3>Yot may also like</h3>
                <div className="grid grid-cols-4 place-items-center">
                    {renderRecommendations()}
                </div>
            </section>

            <section className="grid gap-10">
                <ReviewComponent type={"self"} data={reviews.data?.results[0]} />
                {renderReviews()}
            </section>
        </div>
    );
}