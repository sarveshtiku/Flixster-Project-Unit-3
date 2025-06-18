// src/components/Sidebar.jsx
import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.css'

export default function Sidebar({ open, onClose, onNavigate }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? 'visible' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={onClose}>×</button>

        <nav className="sidebar__nav">
          <button onClick={() => onNavigate('now_playing')}>Home</button>
          <button onClick={() => onNavigate('favorites')}>Favorites</button>
          <button onClick={() => onNavigate('watched')}>Watched</button>
        </nav>
      </aside>
    </>
  )
}

Sidebar.propTypes = {
  open:       PropTypes.bool.isRequired,
  onClose:    PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
}
