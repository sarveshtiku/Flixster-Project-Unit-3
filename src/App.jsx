// src/App.jsx
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  // “mode” and “searchTerm” still live here,
  // but App is no longer responsible for rendering the <SearchBar>.
  const [mode, setMode] = useState('now_playing');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (q) => {
    setMode('search');
    setSearchTerm(q);
  };

  const handleClear = () => {
    setMode('now_playing');
    setSearchTerm('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flixster</h1>
      </header>

      {/* MovieList now takes over rendering SearchBar + grid + load‐more */}
      <MovieList
        mode={mode}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      <footer className="App-footer">
        © 2025 Flixster
      </footer>
    </div>
  );
}

export default App;
