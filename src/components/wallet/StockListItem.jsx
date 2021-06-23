import React from 'react';
import { useState, useEffect } from 'react';
import "./Wallet.scss";

export default function StockListItem(props) {

  // ticker
  // shares
  // graph
  // equity
  // up

  const [equityUpOrDown, setEquityUpOrDown] = useState('equity-up');

  useEffect(()=>{
    (props.up === false && setEquityUpOrDown('equity-down'));
  },[props.up])

  return (
  <div className='stock-list-item'>
    <div className='ticker-shares'>
      <h5 className='stock-list-item-ticker'>{ props.ticker }</h5>
      <p className='stock-owned-shares'>{ props.shares } shares</p>
    </div>
    <img src={ props.graph } alt='graph' className='list-graph'/>
    <div className={ equityUpOrDown }>
      <p>{ props.equity }</p>
    </div>
  </div>
  )
};