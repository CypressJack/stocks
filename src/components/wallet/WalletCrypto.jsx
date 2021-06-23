import React from 'react';
import "./Wallet.scss";
import CryptoListItem from './CryptoListItem';
import ethGraph from "../../assets/stock-list-item/eth-graph.png";
import btcGraph from "../../assets/stock-list-item/btc-graph.png";


const coins = 
[
  {
    ticker: 'BTC',
    name: 'Bitcoin',
    equity: 90000,
    equityString: '$90,000',
    price: '$40,000',
    graph: btcGraph,
    shares: 2.25,
    up: true
  },
  {
    ticker: 'ETH',
    name: 'Ethereum',
    equity: 120000,
    equityString: '$120,000',
    price: '$2,700',
    graph: ethGraph,
    shares: 24,
    up: true
  },
];



export default function WalletCrypto(props) {
  
  let totalEquity = 0;
  for (const coin of coins) {
    totalEquity = totalEquity + coin.equity;
  }
  
  props.getCryptoEquity(totalEquity);
  
  return (
    <div className='wallet-crypto'>
      <h2 className='wallet-crypto-heading'>Cryptocurrencies</h2>
      <CryptoListItem ticker={ coins[0].ticker } shares={ coins[0].shares } graph={ coins[0].graph } equity={ coins[0].equityString } up={ coins[0].up }/>
      <CryptoListItem ticker={ coins[1].ticker } shares={ coins[1].shares } graph={ coins[1].graph } equity={ coins[1].equityString } up={ coins[1].up }/>
    </div>
  )
};