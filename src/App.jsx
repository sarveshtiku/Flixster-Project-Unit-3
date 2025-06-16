// src/App.jsx
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MovieList from './components/MovieList'
import './App.css'

export default function App() {
  // — which list we’re showing
  const [mode, setMode] = useState('now_playing')
  const [searchTerm, setSearchTerm] = useState('')

  // — favorites & watched as arrays of movie objects
  const [favorites, setFavorites] = useState([])
  const [watched, setWatched]     = useState([])

  // — search handlers
  const handleSearch = q => {
    setMode('search')
    setSearchTerm(q)
  }
  const handleClear = () => {
    setMode('now_playing')
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
      <Sidebar favorites={favorites} watched={watched} />

      <div className="main-content">
        <header className="App-header">
          <h1
            className="App-logo"
            onClick={handleClear}
          >
            Flixster
          </h1>
        </header>

        <MovieList
          mode={mode}
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
