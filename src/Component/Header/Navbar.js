import React from 'react';

function Navbar(props) {
  function action(e) {
    e.target.parentElement.previousElementSibling.classList.toggle("show")
  }
  return (
    <div className="navbar flex">
      <img src={props.img} />
      <ul className="menus flex">
        <li><a>{props.menu1}</a></li>
        <li><a>{props.menu2}</a></li>
        <li><a>{props.menu3}</a></li>
        <li><a className="btn">{props.btn}</a></li>
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