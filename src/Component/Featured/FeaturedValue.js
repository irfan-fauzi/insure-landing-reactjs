import React from 'react';

function FeaturedValue(props) {
  return (
    <>
      <div className="card">
        <img src={props.icon} className="icon-cards" />
        <h4>{props.title}</h4>
        <p>{props.detail}</p>
      </div>
    </>
  );
}
export default FeaturedValue;