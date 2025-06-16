// src/components/MovieCard.jsx
import React from 'react'
import PropTypes from 'prop-types'
import './MovieCard.css'

const MovieCard = ({
  movie,
  onClick,
  isFavorite,
  onToggleFavorite,
  isWatched,
  onToggleWatched
}) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : '/placeholder.png'

  return (
    <article className="movie-card" onClick={() => onClick(movie.id)}>
      {/* 👁️ watched button */}
      <button
        className={`watched-btn${isWatched ? ' watched' : ''}`}
        onClick={e => {
          e.stopPropagation()
          onToggleWatched(movie.id)
        }}
        aria-label={isWatched ? 'Unmark Watched' : 'Mark Watched'}
      >
        👁️
      </button>

      {/* 🖤 favorite button */}
      <button
        className="favorite-btn"
        onClick={e => {
          e.stopPropagation()
          onToggleFavorite(movie.id)
        }}
        aria-label={isFavorite ? 'Unfavorite' : 'Favorite'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <img
        className="movie-card__poster"
        src={posterUrl}
        alt={movie.title}
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__rating">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </article>
  )
}

MovieCard.propTypes = {
  movie:           PropTypes.object.isRequired,
  onClick:         PropTypes.func,
  isFavorite:      PropTypes.bool,
  onToggleFavorite:PropTypes.func,
  isWatched:       PropTypes.bool,
  onToggleWatched: PropTypes.func,
}

MovieCard.defaultProps = {
  onClick:          () => {},
  isFavorite:       false,
  onToggleFavorite: () => {},
  isWatched:        false,
  onToggleWatched:  () => {},
}

export default MovieCard
