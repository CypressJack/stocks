import React from 'react';
import "./Wallet.scss";
import WalletStocks from "./WalletStocks"
import WalletCrypto from "./WalletCrypto"
import createStringFromNum from '../../helpers/createStringFromNum';


export default function Wallet(props) {

  const equity = createStringFromNum(props.equity);

  return (
    <div className='wallet'>
        <div className='wallet-header'>
          <h4 className='wallet-value'>{ equity }</h4>
          <h5 className='wallet-heading'>Investing</h5>
        </div>
        <WalletStocks getStockEquity={ props.getStockEquity }/>
        <WalletCrypto getCryptoEquity={ props.getCryptoEquity }/>
    </div>
  )
}