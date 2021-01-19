import React from 'react';
import FeaturedValue from './FeaturedValue';

function Featured() {
  const title = "We're different";
  const dataFeatured = [
    {

      icon: "https://raw.githubusercontent.com/irfan-fauzi/insure-landing-reactjs/beafd37eb3ac50fdaa045d270b4e6c9fd3314379/src/images/icon-snappy-process.svg",
      title: "Snappy Process",
      detail: " Our application process can be completed in minutes, not hours. Don’t get  stuck filling in tedious forms."
    },
    {

      icon: "https://raw.githubusercontent.com/irfan-fauzi/insure-landing-reactjs/beafd37eb3ac50fdaa045d270b4e6c9fd3314379/src/images/icon-affordable-prices.svg",
      title: "Affordable Prices",
      detail: " We don’t want you worrying about high monthly costs. Our prices may be low    but we still offer the best coverage possible."
    },
    {

      icon: "https://raw.githubusercontent.com/irfan-fauzi/insure-landing-reactjs/beafd37eb3ac50fdaa045d270b4e6c9fd3314379/src/images/icon-people-first.svg",
      title: "People first",
      detail: " Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it. "
    },

  ];
  return (
    <section className="featured">
      <div className="container">
        <span className="line"></span>
        <h1>{title}</h1>
        <div className="featured-cards">
          {dataFeatured.map(el => (
            // harus ada property key yang unik
            <FeaturedValue icons={el.icon} titles={el.title} details={el.detail} key={el.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Featured;