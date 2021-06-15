import React from 'react';
import { useState } from "react";
import "./NavBar.scss";
import NavIcon from "./NavIcon";
import icon1 from "../assets/icons/nav-icon-1-grey.png"
import icon2 from "../assets/icons/nav-icon-2-grey.png"
import icon3 from "../assets/icons/nav-icon-3-grey.png"
import icon4 from "../assets/icons/nav-icon-4-grey.png"
import icon5 from "../assets/icons/nav-icon-5-grey.png"
import icon1black from "../assets/icons/nav-icon-1-black.png"
import icon2black from "../assets/icons/nav-icon-2-black.png"
import icon3black from "../assets/icons/nav-icon-3-black.png"
import icon4black from "../assets/icons/nav-icon-4-black.png"
import icon5black from "../assets/icons/nav-icon-5-black.png"

export default function Navbar(props) {

  const [navIcon1, setIcon1] = useState(icon1);
  const [navIcon2, setIcon2] = useState(icon2);
  const [navIcon3, setIcon3] = useState(icon3);
  const [navIcon4, setIcon4] = useState(icon4);
  const [navIcon5, setIcon5] = useState(icon5);
  
  return (
    <div className='nav-bar'>
      <NavIcon id={'icon1'} icon={ icon1black }/>
      <NavIcon id={'icon2'} icon={ icon2 }/>
      <NavIcon id={'icon3'} icon={ icon3 }/>
      <NavIcon id={'icon4'} icon={ icon4 }/>
      <NavIcon id={'icon5'} icon={ icon5 }/>
    </div>
  )
};