import { useContext } from "react";
import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.css";
import { Context } from "../../context";
import { filterHandler, searchHandler } from "../../utilities/data";

const MovieList = ({ onDelete, OnToggle }) => {
    const { state, dispacth } = useContext(Context);

    const data = filterHandler(
        searchHandler(state.data, state.term),
        state.filter,
    );

    return (
        <ul className="movie-list list-group">
            {data.map((movie) => (
                <MovieListItem key={movie.id} {...movie} />
            ))}
        </ul>
    );
};

export default MovieList;
