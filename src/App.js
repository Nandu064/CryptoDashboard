import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Table from './components/Table'
import Marketdetails from './components/Marketdetails';
import {Button} from 'react-bootstrap'
import Footer from './components/Footer';
function App() {
  const [currencyData, setCurrencyData] = useState([]);
  const fetchData = ()=>{
    axios.get('https://api.coincap.io/v2/assets')
      .then((res)=>{
        setCurrencyData(res.data.data);
    })
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="App">
      <div className="headerContainer">
        <header className="App-header">
          <div className="links">
            <a href="/"><div className="link item">Coins</div></a>
            <a href="/exchanges"><div className="link item">Exchanges </div></a>
            <a href="/swap"><div className="link item">Swap</div></a>
          </div>
          <div className="header_logo">
            <a href="/"><img style={{width:'80px',height:'30px'}} src="data:image/png;base64,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" alt="coincap"></img></a>
          </div>
          <div className="links">
            <a href="#"><div className="link item"><i className="fa fa-search" aria-hidden="true"></i></div></a>
            <a href="#"><div className="link item"><i className="fas fa-cog" aria-hidden="true"></i></div></a>
            <a href="#"><div className="link item"><Button className="button" variant="success">Connect Wallet</Button></div></a>
          </div>
          </header>
      </div>
      <div className="color_blue">
        <Marketdetails />
      </div>
      <div className="table_container">
        {(currencyData.length!==0) ? <Table currencyData={currencyData}/> : null }
      </div>
      <Button className="button_bottom" variant="success">View More</Button>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
