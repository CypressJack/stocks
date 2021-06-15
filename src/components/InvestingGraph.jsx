import React from 'react';
import "./HomePage.scss";
import line from "../assets/stock-graph/line.png";
import GraphIcon from "./GraphIcon";
import icon1 from "../assets/stock-graph/live.png"
import icon2 from "../assets/stock-graph/1d.png"
import icon3 from "../assets/stock-graph/1w.png"
import icon4 from "../assets/stock-graph/1m.png"
import icon5 from "../assets/stock-graph/3m.png"
import icon6 from "../assets/stock-graph/1y.png"
import icon7 from "../assets/stock-graph/all.png"

export default function InvestingGraph(props) {
  return (
    <div className='investing-graph'>
      <img className='graph-line' src={ line } alt='line'/>
      <div className='graph-icons'>
        <GraphIcon icon={ icon1 } id={ 'live' } />
        <GraphIcon icon={ icon2 } id={ '1d' } />
        <GraphIcon icon={ icon3 } id={ '1w' } />
        <GraphIcon icon={ icon4 } id={ '1m' } />
        <GraphIcon icon={ icon5 } id={ '3m' } />
        <GraphIcon icon={ icon6 } id={ '1y' } />
        <GraphIcon icon={ icon7 } id={ 'all' } />
      </div>
    </div>
  )
};