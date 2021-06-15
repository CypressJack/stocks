import React from 'react';
import "./NavBar.scss";
import NavIcon from "./NavIcon";
import icon1 from "../assets/icons/nav-icon-1-grey.png"
import icon2 from "../assets/icons/nav-icon-2-grey.png"
import icon3 from "../assets/icons/nav-icon-3-grey.png"
import icon4 from "../assets/icons/nav-icon-4-grey.png"
import icon5 from "../assets/icons/nav-icon-5-grey.png"

export default function Navbar(props) {

  return (
    <div className='nav-bar'>
      <NavIcon id={1}icon={ icon1 }/>
      <NavIcon id={2}icon={ icon2 }/>
      <NavIcon id={3}icon={ icon3 }/>
      <NavIcon id={4}icon={ icon4 }/>
      <NavIcon id={5}icon={ icon5 }/>
    </div>
  )
};