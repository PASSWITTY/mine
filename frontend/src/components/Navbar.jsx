// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container flex mx-auto justify-between">
        <Link to="/" className="text-white font-bold text-xl">Portfolio</Link>
        <div className="flex">
          <Link to="/skills" className="text-white ml-4">Skills</Link>
          <Link to="/projects" className="text-white ml-4">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
