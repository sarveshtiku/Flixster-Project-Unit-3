// src/components/MovieList.jsx
import React, { useState, useEffect, useMemo } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import MovieModal from './MovieModal';
import './MovieList.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export default function MovieList({ mode, searchTerm, onSearch, onClear }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // for modal
  const [selectedId, setSelectedId] = useState(null);

  // for sorting
  const [sortBy, setSortBy] = useState('title');

  // fetch now_playing or search whenever mode, page, or searchTerm changes
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const path =
          mode === 'now_playing'
            ? `movie/now_playing?page=${page}`
            : `search/movie?query=${encodeURIComponent(searchTerm)}&page=${page}`;
        const res = await fetch(
          `${BASE_URL}/${path}&api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        setMovies(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [mode, searchTerm, page]);

  // reset page + list when you switch mode or term
  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [mode, searchTerm]);

  // sorted copy of movies
  const sortedMovies = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'release_date') {
        return new Date(b.release_date) - new Date(a.release_date);
      }
      if (sortBy === 'vote_average') {
        return b.vote_average - a.vote_average;
      }
      return 0;
    });
  }, [movies, sortBy]);

  return (
    <main>
      {/* search + sort controls */}
      <div className="movie-list__controls">
        <SearchBar onSearch={onSearch} onClear={onClear} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {/* grid */}
      <div className="movie-list">
        {sortedMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedId(movie.id)}
          />
        ))}
      </div>

      {/* load more */}
      <div className="load-more-container">
        <button
          className="load-more"
          onClick={() => setPage(prev => prev + 1)}
          disabled={loading}
        >
          {loading ? 'Loading…' : 'Load More'}
        </button>
      </div>

      {/* details modal */}
      {selectedId && (
        <MovieModal
          movieId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </main>
  );
}
