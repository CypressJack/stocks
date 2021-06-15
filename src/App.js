import React from 'react';
import { useState } from 'react';
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

function App() {

  const [page, setPage] = useState('account');

  const navPage = function(page) {
    setPage(page)
  }

  return (
      <div className='app'>
        {page === account && <HomePage/>}
        {page === wallet && <Wallet/>}
        <NavBar navPage={navPage}/>
      </div>
  );
}

export default App;
