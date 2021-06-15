import React from 'react';
import { useState } from 'react';
import "./HomePage.scss";
import line from "../../assets/stock-graph/line-1m.png";
import GraphIcon from "./GraphIcon";
import icon1 from "../../assets/stock-graph/live.png"
import icon2 from "../../assets/stock-graph/1d.png"
import icon3 from "../../assets/stock-graph/1w.png"
import icon4 from "../../assets/stock-graph/1m.png"
import icon5 from "../../assets/stock-graph/3m.png"
import icon6 from "../../assets/stock-graph/1y.png"
import icon7 from "../../assets/stock-graph/all.png"

import icon2Selected from "../../assets/stock-graph/1d-selected.png"
import icon3Selected from "../../assets/stock-graph/1w-selected.png"
import icon4Selected from "../../assets/stock-graph/1m-selected.png"
import icon5Selected from "../../assets/stock-graph/3m-selected.png"
import icon6Selected from "../../assets/stock-graph/1y-selected.png"
import icon7Selected from "../../assets/stock-graph/all-selected.png"

import graphLine1 from "../../assets/stock-graph/line-1d.png";
import graphLine2 from "../../assets/stock-graph/line-1w.png";
import graphLine3 from "../../assets/stock-graph/line-1m.png";
import graphLine4 from "../../assets/stock-graph/line-3m.png";
import graphLine5 from "../../assets/stock-graph/line-1y.png";
import graphLine6 from "../../assets/stock-graph/line-all.png";

export default function InvestingGraph(props) {

  // Icon states
  const [graphIcon2, setGraphIcon2] = useState(icon2);
  const [graphIcon3, setGraphIcon3] = useState(icon3);
  const [graphIcon4, setGraphIcon4] = useState(icon4Selected);
  const [graphIcon5, setGraphIcon5] = useState(icon5);
  const [graphIcon6, setGraphIcon6] = useState(icon6);
  const [graphIcon7, setGraphIcon7] = useState(icon7);

  // Graph states
  const [graphLine, setGraphLine] = useState(graphLine3);

  const changeGraphIcons = function(setIcon, selected, graph, id){
    setGraphIcon2(icon2);
    setGraphIcon3(icon3);
    setGraphIcon4(icon4);
    setGraphIcon5(icon5);
    setGraphIcon6(icon6);
    setGraphIcon7(icon7);
    setIcon(selected);
    setGraphLine(graph)
    props.changeDelta(id)
  };

  return (
    <div className='investing-graph'>
      <img className='graph-line' src={ graphLine } alt='line'/>
      <div className='graph-icons'>
        <GraphIcon icon={ icon1 } id={ 'live' } />
        <GraphIcon onClick={()=>{ (changeGraphIcons(setGraphIcon2, icon2Selected, graphLine1, '1d')) }} icon={ graphIcon2 } id={ '1d' } />
        <GraphIcon onClick={()=>{ (changeGraphIcons(setGraphIcon3, icon3Selected, graphLine2, '1w')) }} icon={ graphIcon3 } id={ '1w' } />
        <GraphIcon onClick={()=>{ (changeGraphIcons(setGraphIcon4, icon4Selected, graphLine3, '1m')) }} icon={ graphIcon4 } id={ '1m' } />
        <GraphIcon onClick={()=>{ (changeGraphIcons(setGraphIcon5, icon5Selected, graphLine4, '3m')) }} icon={ graphIcon5 } id={ '3m' } />
        <GraphIcon onClick={()=>{ (changeGraphIcons(setGraphIcon6, icon6Selected, graphLine5, '1y')) }} icon={ graphIcon6 } id={ '1y' } />
        <GraphIcon onClick={()=>{ (changeGraphIcons(setGraphIcon7, icon7Selected, graphLine6, 'all')) }} icon={ graphIcon7 } id={ 'all' } />
      </div>
    </div>
  )
};