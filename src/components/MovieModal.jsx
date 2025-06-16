// src/components/MovieModal.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MovieModal.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export default function MovieModal({ movieId, onClose }) {
  const [details, setDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    async function fetchAll() {
      setLoading(true);
      try {
        const [dRes, vRes] = await Promise.all([
          fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`),
          fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
        ]);
        const dData = await dRes.json();
        const vData = await vRes.json();
        setDetails(dData);
        setVideos(vData.results || []);
      } catch (err) {
        console.error('Error fetching movie details or videos:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
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

            <div className="modal-meta">
              <p><strong>Release Date:</strong> {details.release_date}</p>
              <p><strong>Runtime:</strong> {details.runtime} min</p>
              <p><strong>Genres:</strong> {details.genres.map(g => g.name).join(', ')}</p>
            </div>

            <p className="modal-overview"><strong>Overview:</strong> {details.overview}</p>

            {/* trailer */}
            {(() => {
              const trailer = videos.find(
                v => v.type === 'Trailer' && v.site === 'YouTube'
              );
              return trailer ? (
                <div className="modal-trailer">
                  <h3>Trailer</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={`${details.title} Trailer`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : null;
            })()}

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
