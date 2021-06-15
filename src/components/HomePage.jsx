import React from 'react';
import StockNews from './StockNews';
import "./HomePage.scss";


export default function Homepage(props){
  return (
    <div className='home-page'>
      <StockNews/>
    </div>
  );
};