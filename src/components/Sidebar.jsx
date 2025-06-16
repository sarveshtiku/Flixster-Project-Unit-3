// src/components/Sidebar.jsx
import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.css'

export default function Sidebar({ favorites, watched }) {
  return (
    <aside className="sidebar">
      <section className="sidebar__section">
        <h2 className="sidebar__title">Favorites</h2>
        {favorites.length === 0 ? (
          <p className="sidebar__empty">No favorites yet.</p>
        ) : (
          <ul className="sidebar__list">
            {favorites.map(movie => (
              <li key={movie.id} className="sidebar__item">
                <img
                  className="sidebar__thumb"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : '/placeholder.png'
                  }
                  alt={movie.title}
                />
                <span className="sidebar__name">{movie.title}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="sidebar__section">
        <h2 className="sidebar__title">Watched</h2>
        {watched.length === 0 ? (
          <p className="sidebar__empty">No watched movies yet.</p>
        ) : (
          <ul className="sidebar__list">
            {watched.map(movie => (
              <li key={movie.id} className="sidebar__item">
                <img
                  className="sidebar__thumb"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : '/placeholder.png'
                  }
                  alt={movie.title}
                />
                <span className="sidebar__name">{movie.title}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </aside>
  )
}

Sidebar.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  watched:   PropTypes.arrayOf(PropTypes.object).isRequired,
}
