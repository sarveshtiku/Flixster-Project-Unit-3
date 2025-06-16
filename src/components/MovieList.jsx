// src/components/MovieList.jsx
import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import SortDropdown from './SortDropdown'
import MovieModal from './MovieModal'
import './MovieList.css'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export default function MovieList({
  mode,
  searchTerm,
  onSearch,
  onClear,
  favorites,
  watched,
  onToggleFavorite,
  onToggleWatched,
}) {
  const [movies, setMovies]       = useState([])
  const [page, setPage]           = useState(1)
  const [loading, setLoading]     = useState(false)
  const [selectedId, setSelected] = useState(null)
  const [sortBy, setSortBy]       = useState('title')

  // fetch now_playing or search results
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true)
      const path =
        mode === 'now_playing'
          ? `movie/now_playing?page=${page}`
          : `search/movie?query=${encodeURIComponent(searchTerm)}&page=${page}`

      try {
        const res  = await fetch(
          `${BASE_URL}/${path}&api_key=${API_KEY}&language=en-US`
        )
        const data = await res.json()
        setMovies(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        )
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [mode, searchTerm, page])

  // reset page + movies when mode or term changes
  useEffect(() => {
    setPage(1)
    setMovies([])
  }, [mode, searchTerm])

  // sort in place
  const sorted = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      if (sortBy === 'release_date')
        return new Date(b.release_date) - new Date(a.release_date)
      if (sortBy === 'vote_average')
        return b.vote_average - a.vote_average
      return 0
    })
  }, [movies, sortBy])

  return (
    <main>
      <section className="banner movie-list__controls">
        <SearchBar onSearch={onSearch} onClear={onClear} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
        <button
          className="btn-now-playing"
          onClick={() => {
            onClear()               // reset React state
            window.location.reload() // then hard‐reload the page
          }}
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

      <div className="load-more-container">
        <button
          className="load-more"
          onClick={() => setPage(p => p + 1)}
          disabled={loading}
        >
          {loading ? 'Loading…' : 'Load More'}
        </button>
      </div>

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
  mode:              PropTypes.oneOf(['now_playing','search']).isRequired,
  searchTerm:        PropTypes.string.isRequired,
  onSearch:          PropTypes.func.isRequired,
  onClear:           PropTypes.func.isRequired,
  favorites:         PropTypes.array.isRequired,
  watched:           PropTypes.array.isRequired,
  onToggleFavorite:  PropTypes.func.isRequired,
  onToggleWatched:   PropTypes.func.isRequired,
}
