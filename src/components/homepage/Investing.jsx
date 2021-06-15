import React from 'react';
import { useState } from 'react';
import "./HomePage.scss";
import InvestingGraph from "./InvestingGraph";
import BuyingPower from "./BuyingPower";
import InvestingHeader from "./InvestingHeader";

export default function Investing(props) {

  const [graphState, setGraphState] = useState('1m');

  const changeDelta = function(id){
    setGraphState(id);
  };

  return (
    <div className='investing'>
      <InvestingHeader graphState={ graphState }/>
      <InvestingGraph changeDelta={ changeDelta }/>
      <BuyingPower/>
    </div>
  )
};