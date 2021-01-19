import React from 'react';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Featured from './Component/Featured/Featured';
import FootBanner from './Component/FootBenner';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <FootBanner />
    </div>
  );
}

export default App;
