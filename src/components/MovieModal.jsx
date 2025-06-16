// src/components/MovieModal.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MovieModal.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export default function MovieModal({ movieId, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error('Error fetching movie details:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [movieId]);

  if (!movieId) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {loading || !details ? (
          <p>Loading…</p>
        ) : (
          <>
            <h2 className="modal-title">{details.title}</h2>
            <img
              className="modal-backdrop-img"
              src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
              alt={`${details.title} backdrop`}
            />
            <p><strong>Release Date:</strong> {details.release_date}</p>
            <p><strong>Runtime:</strong> {details.runtime} min</p>
            <p><strong>Genres:</strong> {details.genres.map(g => g.name).join(', ')}</p>
            <p className="modal-overview"><strong>Overview:</strong> {details.overview}</p>
            <button className="modal-close-btn" onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
}

MovieModal.propTypes = {
  movieId: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

MovieModal.defaultProps = {
  movieId: null,
};
