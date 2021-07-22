import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="column">
                <div className="ui tiny header">COINCAP.IO</div>
                <div className="ui list">
                    <div className="item"><a href="/methodology">Methodology</a></div>
                    <div className="item"><a href="https://shapeshift.com/company">About Us</a></div>
                    <div className="item"><a href="https://shapeshift.zendesk.com/hc/en-us/sections/360003871859-CoinCap">Support</a></div>
                    <div className="item"><a href="//docs.coincap.io">Our API</a></div>
                    <div className="item"><a href="/rate-compare">Rate Comparison</a></div>
                    <div className="item"><a href="https://shapeshift.com/careers">Careers</a></div>
                </div>
            </div>
            <div className="column">
                <div className="ui tiny header">LEGALS</div>
                <div className="ui list">
                    <div className="item"><a href="https://assets.coincap.io/documents/terms_of_service.pdf">Terms of Service</a></div>
                    <div className="item"><a href="https://shapeshift.com/privacy">Privacy Policy</a></div>
                </div>
                <div className="ui tiny header">DISCLAIMER</div>
                    <div className="ui list">
                    <div className="item"><span>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</span></div>
                </div>
            </div>
            <div className="column">
                <div className="ui tiny header">FOLLOW US</div>
                <a href="https://twitter.com/CoinCap_io"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="https://www.facebook.com/watch/?v=365220420785166"><i aria-hidden="true" className="fab fa-facebook fa-2x"></i></a>
            </div>   
            <div className="column">
                <div className="ui tiny header">COINCAP APP AVAILABLE ON</div>
                <div className="ui list">
                    <div className="item"><a href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap" target="_blank"><img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="playstore" className="ui image" /></a></div>
                    <div className="item"><a href="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&amp;ign-mpt=uo%3D4" target="_blank"><img src="http://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png" className="ui image" /></a></div>                
                </div>
            </div>
        </footer>
    )
}

export default Footer
