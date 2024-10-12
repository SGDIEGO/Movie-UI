import { useParams } from "react-router-dom";
import MovieCard from "../../../components/Movie/MovieCard";
import { useFetch } from "../../../hooks/useFetch";
import { IMovie } from "../../../types/Movie.types";
import { ICast } from "../../../types/Cast.types";
import { BEARER_TOKEN } from "../../../data/token";
import { IReview } from "../../../types/Review.types";
import ReviewComponent from "../../../components/Review/ReviewComponent";

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

export default function Movie() {
    const { id } = useParams()
    const movie = useFetch<IMovie>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        []
    )

    const credits = useFetch<ICredits>(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        []
    )

    const recommendations = useFetch<IRecommendations>(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        []
    )

    const reviews = useFetch<IReviews>(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        },
        []
    )

    const renderGenres = () => {
        return movie.data?.genre_ids.map((genre_id) => <span>{genre_id}</span>)
    }

    const renderCast = () => {
        return credits.data?.cast.map((cast) => <span>{cast.name}</span>)
    }

    const renderRecommendations = () => {
        return recommendations.data?.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
    }

    const renderReviews = () => {
        return reviews.data?.results.map((review) => <ReviewComponent key={review.id} type={"others"} data={review} />)
    }

    return (
        <div className="text-white">
            <video src=""></video>

            <section className="flex w-full gap-6">
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
                        <span className="button button-primary">Add to Favourite</span>
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
                        <ul>
                            <li>Country: {movie.data?.origin_country ? movie.data?.origin_country[0] : "No defined"}</li>
                            <li>Genre: {renderGenres()}</li>
                            <li>Date Release: {movie.data?.release_date}</li>
                            <li>Production: {movie.data?.production_companies ? movie.data.production_companies[0] : "No defined"}</li>
                            <li>
                                Cast: {renderCast()}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h3>Yot may also like</h3>
                <div className="grid grid-cols-4">
                    {renderRecommendations()}
                </div>
            </section>

            <section className="">
                <ReviewComponent type={"self"} data={reviews.data?.results[0]} />
                {renderReviews()}
            </section>
        </div>
    );
}