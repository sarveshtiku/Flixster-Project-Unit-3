// src/App.jsx
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import Sidebar from './components/Sidebar'
import MovieList from './components/MovieList'
import './App.css'

export default function App() {
  // — which view we’re showing: now_playing, search, favorites, or watched
  const [view, setView] = useState('now_playing')
  const [searchTerm, setSearchTerm] = useState('')

  // — saved lists
  const [favorites, setFavorites] = useState([])
  const [watched, setWatched]     = useState([])

  // — sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // — search handlers
  const handleSearch = q => {
    setView('search')
    setSearchTerm(q)
  }
  const handleClear = () => {
    setView('now_playing')
    setSearchTerm('')
  }

  // — toggle a movie in/out of favorites
  const toggleFavorite = movie => {
    setFavorites(favs =>
      favs.some(m => m.id === movie.id)
        ? favs.filter(m => m.id !== movie.id)
        : [movie, ...favs]
    )
  }

  // — toggle a movie in/out of watched
  const toggleWatched = movie => {
    setWatched(w =>
      w.some(m => m.id === movie.id)
        ? w.filter(m => m.id !== movie.id)
        : [movie, ...w]
    )
  }

  return (
    <div className="app-layout">
      {/* Slide-out sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={viewName => {
          setView(viewName)
          setSidebarOpen(false)
        }}
      />

      <div className="main-content">
        <header className="App-header">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(open => !open)}
          >
            <FiMenu size={24} />
          </button>
          <h1 className="App-logo" onClick={handleClear}>
            Flixster
          </h1>
        </header>

        <MovieList
          mode={view}
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onClear={handleClear}
          favorites={favorites}
          watched={watched}
          onToggleFavorite={toggleFavorite}
          onToggleWatched={toggleWatched}
        />

        <footer className="App-footer">
          © 2025 Flixster
        </footer>
      </div>
    </div>
  )
}
