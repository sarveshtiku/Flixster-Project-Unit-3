import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Flixster</h2>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/favorites">Favorites</NavLink></li>
        <li><NavLink to="/watched">Watched</NavLink></li>
      </ul>
    </nav>
  );
}
