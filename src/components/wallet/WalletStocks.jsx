import React from 'react';
import "../wallet/Wallet.scss";
import StockListItem from "./StockListItem";
import pilGraph from "../../assets/stock-list-item/pil-graph.png";
import jqlpGraph from "../../assets/stock-list-item/jqlp-graph.png";
import dudGraph from "../../assets/stock-list-item/dud-graph.png";
import { checkPropTypes } from 'prop-types';

const stocks = 
  [
    {
      ticker: 'PIL',
      name: 'Peppermint Innovation',
      equity: 30000,
      equityString: '$30,000',
      price: 1875,
      graph: pilGraph,
      shares: 16,
      up: true
    },
    {
      ticker: 'JQLP',
      name: 'Julius Investments',
      equity: 60000,
      equityString: '$60,000',
      price: 2500,
      graph: jqlpGraph,
      shares: 24,
      up: true
    },
    {
      ticker: 'DUD',
      name: 'Direction Holdings',
      equity: 5000,
      equityString: '$5,000',
      price: 2500,
      graph: dudGraph,
      shares: 7,
      up: false
    }
  ];

export default function WalletStocks(props) {
  // ticker
  // shares
  // graph
  // equity
  
  let totalEquity = 0;
  for (const stock of stocks) {
    totalEquity = totalEquity + stock.equity;
  }

  props.getStockEquity(totalEquity);

  return (
    <div className='wallet-stocks'>
      <h2 className='wallet-stock-heading'>Stocks</h2>
      <StockListItem ticker={ stocks[0].ticker } shares={ stocks[0].shares } graph={ stocks[0].graph } equity={ stocks[0].equityString } up={ stocks[0].up }/>
      <StockListItem ticker={ stocks[1].ticker } shares={ stocks[1].shares } graph={ stocks[1].graph } equity={ stocks[1].equityString } up={ stocks[1].up }/>
      <StockListItem ticker={ stocks[2].ticker } shares={ stocks[2].shares } graph={ stocks[2].graph } equity={ stocks[2].equityString } up={ stocks[2].up }/>
    </div>
  )
};