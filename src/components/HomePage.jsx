import React from 'react';
import StockNews from './StockNews';
import "./HomePage.scss";
import Investing from "./Investing";


export default function Homepage(props){


  
  return (
    <div className='home-page'>
      <Investing/>
      <StockNews/>
    </div>
  );
};