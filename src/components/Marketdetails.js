import React from 'react'
import style from './Market.module.css'
function Marketdetails() {
    return (
        <div className={style.marketdetails_container}>
            <div className={style.market_items}>
                <div className={style.market_item}>
                    <h4>MARKETCAP</h4>
                    <p>$1.32T</p>
                </div>
                <div className={style.market_item}>
                    <h4>ExchangeVol</h4>
                    <p>$1.32T</p>
                </div>
                <div className={style.market_item}>
                    <h4>Assets</h4>
                    <p>$1.32T</p>
                </div>
                <div className={style.market_item}>
                    <h4>Exchanges</h4>
                    <p>$1.32T</p>
                </div>
                <div className={style.market_item}>
                    <h4>Markets</h4>
                    <p>$1.32T</p>
                </div>
                <div className={style.market_item}>
                    <h4>BTCDOM INDEX</h4>
                    <p>$1.32T</p>
                </div>
            </div>
        </div>
    )
}

export default Marketdetails
