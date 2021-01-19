import React from 'react';
import HeroTextWrap from './HeroTextWrap';
function Hero() {
  const dataHero = [
    {
      mainTagline: "Humanizing your Insurance.",
      secondTagline: "Get your live insurance coverage easier and faster. We blend our expertise and technology to help your find the plan that's rights for you. Ensure you and your loved ones are protected",
      btnText: "view plans",
      imgHero: "https://raw.githubusercontent.com/irfan-fauzi/insure-landing-reactjs/main/src/images/image-intro-desktop.jpg"
    }
  ]
  return (
    <section className="hero">
      <div className="container flex">
        <HeroTextWrap mainTagline={dataHero[0].mainTagline} secondTagline={dataHero[0].secondTagline} btnText={dataHero[0].btnText} />
        <img src={dataHero[0].imgHero} alt="img" className="img-hero" />

      </div>
    </section>
  );
}

export default Hero;