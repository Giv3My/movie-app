import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home, MovieDetail, PageNotFound } from './pages';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
