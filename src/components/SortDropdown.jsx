// src/components/SortDropdown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './SortDropdown.css';

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select">Sort by:</label>
      <select
        id="sort-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="title">Title (A–Z)</option>
        <option value="release_date">Release Date (Newest)</option>
        <option value="vote_average">Rating (High → Low)</option>
      </select>
    </div>
  );
}

SortDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
