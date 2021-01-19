import React from 'react';

function FeaturedValue(val) {
  return (
    <>
      <div className="card">
        <img src={val.icons} className="icon-cards" alt="img" />
        <h4>{val.titles}</h4>
        <p>{val.details}</p>
      </div>
    </>
  );
}
export default FeaturedValue;