// src/components/MovieList.jsx
import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import SortDropdown from './SortDropdown'
import MovieModal from './MovieModal'
import './MovieList.css'

const API_KEY  = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export default function MovieList({
  mode, searchTerm, onSearch, onClear,
  favorites, watched,
  onToggleFavorite, onToggleWatched,
}) {
  const [movies, setMovies]       = useState([])
  const [page, setPage]           = useState(1)
  const [loading, setLoading]     = useState(false)
  const [selectedId, setSelected] = useState(null)
  const [sortBy, setSortBy]       = useState('title')

  // only fetch if we’re in search/now_playing mode
  useEffect(() => {
    if (mode !== 'now_playing' && mode !== 'search') return

    setLoading(true)
    const path =
      mode === 'now_playing'
        ? `movie/now_playing?page=${page}`
        : `search/movie?query=${encodeURIComponent(searchTerm)}&page=${page}`

    fetch(`${BASE_URL}/${path}&api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data =>
        setMovies(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        )
      )
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [mode, searchTerm, page])

  // reset when we switch between modes
  useEffect(() => {
    setPage(1)
    setMovies([])
  }, [mode, searchTerm])

  // pick source array
  const source = mode === 'favorites'
    ? favorites
    : mode === 'watched'
    ? watched
    : movies

  // sort any list client-side
  const sorted = useMemo(() => {
    return [...source].sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      if (sortBy === 'release_date')
        return new Date(b.release_date) - new Date(a.release_date)
      if (sortBy === 'vote_average')
        return b.vote_average - a.vote_average
      return 0
    })
  }, [source, sortBy])

  return (
    <main>
      <section className="banner movie-list__controls">
        <SearchBar onSearch={onSearch} onClear={onClear} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
        <button
          className="btn-now-playing"
          onClick={onClear}
          disabled={mode === 'now_playing'}
        >
          Now Playing
        </button>
      </section>

      <div className="movie-list">
        {sorted.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => setSelected(movie.id)}
            isFavorite={favorites.some(m => m.id === movie.id)}
            onToggleFavorite={() => onToggleFavorite(movie)}
            isWatched={watched.some(m => m.id === movie.id)}
            onToggleWatched={() => onToggleWatched(movie)}
          />
        ))}
      </div>

      {mode === 'now_playing' || mode === 'search' ? (
        <div className="load-more-container">
          <button
            className="load-more"
            onClick={() => setPage(p => p + 1)}
            disabled={loading}
          >
            {loading ? 'Loading…' : 'Load More'}
          </button>
        </div>
      ) : null}

      {selectedId && (
        <MovieModal
          movieId={selectedId}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  )
}

MovieList.propTypes = {
  mode:              PropTypes.oneOf(['now_playing','search','favorites','watched']).isRequired,
  searchTerm:        PropTypes.string.isRequired,
  onSearch:          PropTypes.func.isRequired,
  onClear:           PropTypes.func.isRequired,
  favorites:         PropTypes.array.isRequired,
  watched:           PropTypes.array.isRequired,
  onToggleFavorite:  PropTypes.func.isRequired,
  onToggleWatched:   PropTypes.func.isRequired,
}
