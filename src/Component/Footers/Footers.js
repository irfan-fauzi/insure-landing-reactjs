import React from 'react';
import FooterHead from './FooterHead';
import Footer from './Footer';

function Footers() {
  const dataFooterHead = [
    {
      logo: "https://raw.githubusercontent.com/irfan-fauzi/insure-landing-reactjs/83730fb5c4f18b5e45b5c311ff20e33acc2dee1f/src/images/logo.svg"
    }
  ];
  const dataFooter = [
    {
      top: "our company",
      text1: "How we work",
      text2: "why insure ?",
      text3: "view plans",
      text4: ""
    },
    {
      top: "help me",
      text1: "faq",
      text2: "terms of use",
      text3: "privacy policy",
      text4: "cookies"
    },
    {
      top: "contact",
      text1: "sales",
      text2: "suport",
      text3: "live chat",
      text4: ""
    },
    {
      top: "others",
      text1: "careers",
      text2: "press",
      text3: "licenses",
      text4: ""
    },
  ];
  return (
    <section className="footers">
      <div className="container">
        <FooterHead logo={dataFooterHead[0].logo} />
        <footer>
          {
            dataFooter.map(el => (
              <Footer key={el.top} topText={el.top} text1={el.text1} text2={el.text2} text3={el.text3} text4={el.text4} />
            ))
          }
        </footer>
      </div>
    </section>
  );
}

export default Footers;