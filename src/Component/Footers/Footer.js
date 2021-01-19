import React from 'react';

function Footer(props) {
  return (
    <div className="footer-card">
      <ul>
        <p>{props.topText}</p>
        <li>{props.text1}</li>
        <li>{props.text2}</li>
        <li>{props.text3}</li>
        <li>{props.text4}</li>
      </ul>
    </div>
  )
}

export default Footer;