import React from 'react'
import "./index.css"
import usdsign from "../assets/USD.png"
import btcsign from "../assets/BTC.png"
import ethsign from "../assets/ETH.png"
import usdtsign from "../assets/USDT.png"
import bnbsign from "../assets/BNB.png"
import adasign from "../assets/ADA.png"
import xrpsign from "../assets/XRP.png"
import solsign from "../assets/SOL.png"
import dogesign from "../assets/DOGE.png"
import dotsign from "../assets/DOT.png"
import { Link } from 'react-router-dom'

function Select() {
    const swapPage="/swappage"
    return (
        <div className='selectDiv'>
            <h2>Select a Currency</h2>
            <Link to={`${swapPage}/btc`}><div className="select-flex">
                <div><img src={btcsign} alt="" /></div>
                <div className="selectDivs">Bitcoin(BTC)</div></div></Link>
            <Link to={`${swapPage}/eth`}><div className="select-flex">
                <div><img src={ethsign} alt="" /></div>
                <div className="selectDivs">Ethereum(ETH)</div>
            </div></Link>
            <Link to={`${swapPage}/usdt`}><div className="select-flex">
                <div><img src={usdtsign} alt="" /></div>
                <div className="selectDivs">Tether(USDT)</div></div></Link>
            <Link to={`${swapPage}/bnb`}><div className="select-flex">
                <div><img src={bnbsign} alt="" /></div>
                <div className="selectDivs">Binance Coin(BNB)</div></div></Link>
            <Link to={`${swapPage}/ada`}><div className="select-flex">
                <div><img src={adasign} alt="" /></div>
                <div className="selectDivs">Cardano(ADA)</div></div></Link>
            <Link to={`${swapPage}/xrp`}><div className="select-flex">
                <div><img src={xrpsign} alt="" /></div>
                <div className="selectDivs">Ripple(XRP)</div></div></Link>
            <Link to={`${swapPage}/sol`}><div className="select-flex">
                <div><img src={solsign} alt="" /></div>
                <div className="selectDivs">Solana(SOL)</div></div></Link>
            <Link to={`${swapPage}/doge`}><div className="select-flex">
                <div><img src={dogesign} alt="" /></div>
                <div className="selectDivs">Dogecoin(DOGE)</div></div></Link>
            <Link to={`${swapPage}/dot`}><div className="select-flex">
                <div><img src={dotsign} alt="" /></div>
                <div className="selectDivs">Polkadot(DOT)</div></div></Link>
        </div>
    )
}
export default Select