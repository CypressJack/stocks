import React from 'react';
import "./HomePage.scss";
import freeStock from "../assets/investing-header/free-stock.png";
import upArrow from "../assets/investing-header/up-arrow1.png";

export default function InvestingHeader(props) {
  return (
    <div className='investing-header'>
      <div className='investing-header-left'>
        <h2 className='portfolio-value'>Investing $72,024.20</h2>
        <p className='portfolio-delta'><img src={upArrow} alt='up-arrow'/>$6,874.72 9.23%</p>
      </div>
      <div>
        <img className='free-stock' src={ freeStock } alt='free-stock' />
      </div>
    </div>
  )
};