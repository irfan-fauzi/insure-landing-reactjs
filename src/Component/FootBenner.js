import React from 'react';

function FootBanner() {
  const dataFootBanner = [
    {
      mainText: "Find out more about how we work",
      btnTxt: "how we work"
    }
  ]
  return (
    <div className="footBanner">
      <div className="container flex">
        <h1>{dataFootBanner[0].mainText}</h1>
        <a className="btn" href="https://github.com/irfan-fauzi">{dataFootBanner[0].btnTxt}</a>
      </div>
    </div>
  );

}

export default FootBanner;