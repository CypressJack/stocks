import React from 'react';
import { useState, useEffect } from 'react';
import './App.scss';
import NavBar from "./components/NavBar";
import HomePage from "./components/homepage/HomePage";
import Wallet from "./components/wallet/Wallet";


// Pages
const account = 'account';
const wallet = 'wallet';
const browse = 'browse';
const message = 'message';
const profile = 'profile';

const portfolioValue = '$72,024.20';

function App() {


  const [equity, setEquity] = useState(0);
  const [cryptoEquity, setCryptoEquity] = useState(0);
  const [stockEquity, setStockEquity] = useState(0);
  const [buyingPower, setBuyingPower] = useState(0);
  const [page, setPage] = useState('account');

  const navPage = function(page) {
    setPage(page)
  };

  const getStockEquity = function(stocks) {
    setStockEquity(stocks);
  };

  const getCryptoEquity = function(crypto) {
    setCryptoEquity(crypto);
  };

  const getBuyingPower = function(buyingPower) {
    setBuyingPower(buyingPower);
  };

  useEffect(()=>{
   setEquity(cryptoEquity+stockEquity+buyingPower); 
  })

  console.log(stockEquity);
  console.log(cryptoEquity);
  console.log(buyingPower);
  console.log('total', equity);
  return (
      <div className='app'>
        {page === account && <HomePage equity={ equity }getBuyingPower={ getBuyingPower } portfolioValue={ portfolioValue }/>}
        {page === wallet && <Wallet equity={ equity }getCryptoEquity={ getCryptoEquity }getStockEquity={ getStockEquity }portfolioValue={ portfolioValue } />}
        <NavBar navPage={navPage}/>
      </div>
  );
}

export default App;
