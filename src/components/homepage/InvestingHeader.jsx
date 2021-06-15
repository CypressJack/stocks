import React from 'react';
import { useState, useEffect } from 'react';
import "./HomePage.scss";
import freeStock from "../../assets/investing-header/free-stock.png";
import upArrow from "../../assets/investing-header/up-arrow1.png";
import createStringFromNum from '../../helpers/createStringFromNum';

export default function InvestingHeader(props) {

  const equity = createStringFromNum(props.equity)

  const [deltaText, setDeltaText] = useState(['$6,874.72 (9.23%)', 'Past Month']);

  useEffect(()=>{
    (props.graphState === '1d' && setDeltaText(['$2,600.23 (1.16%)', 'Past Day']));
    (props.graphState === '1w' && setDeltaText(['$10,159.57 (5.34%)', 'Past Week']));
    (props.graphState === '1m' && setDeltaText(['$6,874.72 (9.23%)', 'Past Month']));
    (props.graphState === '3m' && setDeltaText(['$2607.98 (1.16%)', 'Past 3 Months']));
    (props.graphState === '1y' && setDeltaText(['$34,973.45 (1.16%)', 'Past Year']));
    (props.graphState === 'all' && setDeltaText(['$66,403.42 (96.89%)', 'All Time']));
  },[props.graphState]);


  return (
    <div className='investing-header'>
      <div className='investing-header-left'>
        <h2 className='portfolio-value'>Investing { equity }</h2>
        <span className='portfolio-delta'><img src={upArrow} alt='up-arrow'/>{ deltaText[0] }</span><span className='timeline-delta'>{ deltaText[1] }</span>
      </div>
      <div>
        <img className='free-stock' src={ freeStock } alt='free-stock' />
      </div>
    </div>
  )
};