// src/components/Home.js
import React from 'react';

import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-red-100 h-screen" >
      <div className="container flex flex-col gap-10 items-center justify-center mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-red-500 text-center">Unlocking Digital Possibilities</h1>
        <p className="text-lg text-black text-center mt-4">I create innovative tech solutions that drive impact.</p>
        <Link to="/projects"><button className="bg-red-800 text-white font-bold py-2 px-4 rounded-full mt-8">View My Projects</button></Link>
      </div>
    </section>
    </div>
  );
};

export default Home;
