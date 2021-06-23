import React from 'react';
import { useState } from "react";
import "./NavBar.scss";
import NavIcon from "./NavIcon";
import icon1 from "../assets/icons/nav-icon-1-grey.png"
import icon2 from "../assets/icons/nav-icon-2-grey.png"
import icon3 from "../assets/icons/nav-icon-3-grey.png"
import icon4 from "../assets/icons/nav-icon-4-grey.png"
import icon5 from "../assets/icons/nav-icon-5-grey.png"
import icon1Black from "../assets/icons/nav-icon-1-black.png"
import icon2Black from "../assets/icons/nav-icon-2-black.png"
import icon3Black from "../assets/icons/nav-icon-3-black.png"
import icon4Black from "../assets/icons/nav-icon-4-black.png"
import icon5Black from "../assets/icons/nav-icon-5-black.png"

// Pages
const account = 'account';
const wallet = 'wallet';
const browse = 'browse';
const message = 'message';
const profile = 'profile';

export default function Navbar(props) {


  const [navIcon1, setIcon1] = useState(icon1Black);
  const [navIcon2, setIcon2] = useState(icon2);
  const [navIcon3, setIcon3] = useState(icon3);
  const [navIcon4, setIcon4] = useState(icon4);
  const [navIcon5, setIcon5] = useState(icon5);

  const changeIcon = function(setIcon, selected, id){
    console.log('clicked');
    setIcon1(icon1);
    setIcon2(icon2);
    setIcon3(icon3);
    setIcon4(icon4);
    setIcon5(icon5);
    setIcon(selected);
    props.navPage(id)
  };
  
  return (
    <div className='nav-bar'>
      <NavIcon onClick={()=>{ changeIcon(setIcon1, icon1Black, account) } } id={'account'} icon={ navIcon1 }/>
      <NavIcon onClick={()=>{ changeIcon(setIcon2, icon2Black, wallet) } }  id={'wallet'} icon={ navIcon2 }/>
      <NavIcon onClick={()=>{ changeIcon(setIcon3, icon3Black, browse) } }  id={'browse'} icon={ navIcon3 }/>
      <NavIcon onClick={()=>{ changeIcon(setIcon4, icon4Black, message) } } id={'message'} icon={ navIcon4 }/>
      <NavIcon onClick={()=>{ changeIcon(setIcon5, icon5Black, profile) } } id={'profile'} icon={ navIcon5 }/>
    </div>
  )
};