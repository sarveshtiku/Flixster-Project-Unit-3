// src/components/SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar__input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button type="submit" className="search-bar__button">🔍</button>
      <button
        type="button"
        className="search-bar__clear"
        onClick={handleClear}
      >
        ✖
      </button>
    </form>
  );
};

export default SearchBar;