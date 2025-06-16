import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "/placeholder.png";

  return (
    <article className="movie-card" onClick={() => onClick(movie)}>
      <img
        className="movie-card__poster"
        src={posterUrl}
        alt={movie.title}
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__rating">⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

MovieCard.defaultProps = {
  onClick: () => {},
};

export default MovieCard;
