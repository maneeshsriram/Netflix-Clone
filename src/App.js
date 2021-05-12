import React from 'react';

import './App.css';

import Header from './Header';
import Poster from './Poster';
import Shows from './Shows'
import list from './list';

function App() {
  return (
    <div className="app">

      <Header />

      <Poster />

      <Shows genre="NETFLIX ORIGINALS" fetchUrl={list.NetflixOriginals} first />
      <Shows genre="Trending Now" fetchUrl={list.Trending} />
      <Shows genre="Top Rated" fetchUrl={list.TopRated} />
      <Shows genre="Comedy" fetchUrl={list.ComedyMovies} />
      <Shows genre="Horror" fetchUrl={list.HorrorMovies} />
      <Shows genre="Western" fetchUrl={list.WesternMovies} />
      <Shows genre="Romance" fetchUrl={list.RomanceMovies} />
      <Shows genre="Action" fetchUrl={list.ActionMovies} last />
    </div>
  );
}

export default App;
