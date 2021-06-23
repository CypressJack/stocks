import React from 'react';
import "./HomePage.scss";
import icon from "../../assets/buying-power/buying-power-icon.png";

const buyingPower = {
  equity: 976.17,
  equityString: '$976.17'
}

export default function BuyingPower(props) {

  props.getBuyingPower(buyingPower.equity);

  return (
    <div className='buying-power'>
      <span>Buying Power</span><span><span>{ buyingPower.equityString }</span><img className='buying-power-icon'src={ icon } alt='buy-icon' /></span>
    </div>
  )
};