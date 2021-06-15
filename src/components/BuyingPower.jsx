import React from 'react';
import "./HomePage.scss";
import icon from "../assets/buying-power/buying-power-icon.png";

export default function BuyingPower(props) {
  return (
    <div className='buying-power'>
      <span>Buying Power</span><span>$976.17<img className='buying-power-icon'src={ icon } alt='buy-icon' /></span>
    </div>
  )
};