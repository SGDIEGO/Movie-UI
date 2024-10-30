import { useParams } from "react-router-dom";
import MovieCard from "../../../components/Movie/MovieCard";
import { useFetch } from "../../../hooks/useFetch";
import { IMovie } from "../../../types/Movie.types";
import { ICast } from "../../../types/Cast.types";
import { BEARER_TOKEN } from "../../../data/token";
import { IReview } from "../../../types/Review.types";
import ReviewComponent from "../../../components/Review/ReviewComponent";
import { useAppContext } from "../../../context";
import { IVideo } from "../../../types/Video.types";

interface ICredits {
    id: number;
    cast: Array<ICast>
}

interface IRecommendations {
    page: number;
    results: Array<IMovie>;
}

interface IReviews {
    id: number;
    page: number
    results: Array<IReview>;
}

interface IVideos {
    id: number;
    results: Array<IVideo>
}

export default function Movie() {
    const appCtx = useAppContext()
    const { id } = useParams()

    const movie = useFetch<IMovie>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const credits = useFetch<ICredits>(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const recommendations = useFetch<IRecommendations>(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const reviews = useFetch<IReviews>(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const trailer = useFetch<IVideos>(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        [id]
    )

    const renderCast = () => {
        return credits.data?.cast?.map((cast) => <span>{cast.name}</span>)
    }

    const renderRecommendations = () => {
        return recommendations.data?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
    }

    const renderReviews = () => {
        return reviews.data?.results?.map((review) => <ReviewComponent key={review.id} type={"others"} data={review} />)
    }

    const renderGenres = () => {
        if (movie.data?.genres) return movie.data.genres.map(gn => <span>{gn.name}</span>)
        const a = appCtx.renderGenresFn(movie.data?.genre_ids)

        return a.map(gn => <span>{gn}</span>)
    }

    const renderVideo = () => {
        if (!trailer.data?.results) return null

        return <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${trailer.data?.results[0].key}`} ></iframe>
    }

    return (
        <div className="text-white grid gap-10 mx-40">
            <div className="w-full min-h-[500px]">
                {renderVideo()}
                {/*<Link to={"http://google.com"} className="flex justify-center relative mx-auto">
                    <img className="object-cover" src={"https://image.tmdb.org/t/p/original/" + movie.data?.backdrop_path}></img>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute bottom-1/2 size-12">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </Link>*/}
            </div>

            <section className="flex w-full gap-6 place-content-center">
                <div className="h-[576px] min-w-[352px]">
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src={"https://image.tmdb.org/t/p/w500/" + movie.data?.poster_path}
                        alt=""
                    />
                </div>
                <div className="grid">
                    <div className="flex justify-between">
                        <span className="">{movie.data?.title}</span>
                        <div>
                            <button className="button button-primary">Add to Favourite</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            {renderGenres()}
                            <span>{movie.data?.release_date}</span>
                            <span>50:38</span>
                            <span>{movie.data?.vote_average}</span>
                        </div>
                        <p>{movie.data?.overview}</p>
                    </div>
                    <div>
                        <table className="">
                            <tbody>
                                <tr>
                                    <td>Country</td>
                                    <td>:</td>
                                    <td>{movie.data?.origin_country ? movie.data?.origin_country[0] : "No defined"}</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>:</td>
                                    <td>{renderGenres().map(gn => <span>{gn}</span>)}</td>
                                </tr>
                                <tr>
                                    <td>Date Release</td>
                                    <td>:</td>
                                    <td>{movie.data?.release_date}</td>
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

            <section className="">
                <h3>Yot may also like</h3>
                <div className="grid grid-cols-4 place-items-center gap-3">
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