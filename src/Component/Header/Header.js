import React from 'react';
import Navbar from './Navbar';

function Header() {
  const dataHeader = [
    {
      img: "https://raw.githubusercontent.com/irfan-fauzi/insure-landing-reactjs/83730fb5c4f18b5e45b5c311ff20e33acc2dee1f/src/images/logo.svg",
      menu1: "how we work",
      menu2: "blog",
      menu3: "account",
      btn: "view plans"
    }
  ]
  return (
    <header>
      <div className="container">
        <Navbar img={dataHeader[0].img} menu1={dataHeader[0].menu1} menu2={dataHeader[0].menu2} menu3={dataHeader[0].menu3} btn={dataHeader[0].btn} />
      </div>
    </header>
  );
}
export default Header;