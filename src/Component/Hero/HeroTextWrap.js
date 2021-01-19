import React from 'react';

function HerotextWrap(props) {
  return (
    <div className="hero__text-wrap">
      <span className="line" />
      <h1>{props.mainTagline}</h1>
      <p>{props.secondTagline}</p>
      <a className="btn" href="https://github.com/irfan-fauzi">{props.btnText}</a>
    </div>
  );
}
export default HerotextWrap;