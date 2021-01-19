import React from 'react';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Featured from './Component/Featured/Featured';
import FootBanner from './Component/FootBenner';
import Footers from './Component/Footers/Footers';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <FootBanner />
      <Footers />
    </div>
  );
}

export default App;
