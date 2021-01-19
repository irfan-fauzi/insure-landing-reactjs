import React from 'react';

function FooterHead(props) {
  return (
    <div className="footer-head flex">
      <img src={props.logo} alt="img" />
      <ul className="socmed flex">
        <li><i className="fab fa-facebook-square fa-2x"></i></li>
        <li><i className="fab fa-twitter fa-2x"></i></li>
        <li><i className="fab fa-instagram fa-2x"></i></li>
        <li><i className="fab fa-pinterest fa-2x"></i></li>
      </ul>
    </div>
  )
}

export default FooterHead;