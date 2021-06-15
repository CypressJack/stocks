import React from 'react';
import "./HomePage.scss";
import InvestingGraph from "./InvestingGraph";
import BuyingPower from "./BuyingPower";
import InvestingHeader from "./InvestingHeader";

export default function Investing(props) {
  return (
    <div className='investing'>
      <InvestingHeader/>
      <InvestingGraph/>
      <BuyingPower/>
    </div>
  )
};