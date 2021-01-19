import React from 'react';

function Navbar(props) {
  function action(e) {
    e.target.parentElement.previousElementSibling.classList.toggle("show")
  }
  return (
    <div className="navbar flex">
      <img src={props.img} alt="img" />
      <ul className="menus flex">
        <li><a href="https://github.com/irfan-fauzi">{props.menu1}</a></li>
        <li><a href="https://github.com/irfan-fauzi">{props.menu2}</a></li>
        <li><a href="https://github.com/irfan-fauzi">{props.menu3}</a></li>
        <li><a className="btn" href="https://github.com/irfan-fauzi">{props.btn}</a></li>
      </ul>
      <div className="menu-toggle">
        <input type="checkbox" onChange={action} />
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
}

export default Navbar;