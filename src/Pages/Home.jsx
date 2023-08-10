import React from 'react'
import homeStore from '../Store/homestore'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import "./Home.css";
// import ListItem from '../components/ListItem';
// import homeStore from '../Store/homestore'

export default function Home() {
  const store = homeStore();

  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div>
      <Header />
      <header className='home-search'>
        <div className='width'>
          <h2>Search for a coin</h2>
          <input type='text' value={store.query} onChange={store.setQuery} />
        </div>
      </header>
      <div className='home-cryptos'>
      <h2 className='width'>trending coins</h2>
              <br/>
      {store.coins.map(coin => {
        return (
          <div className='home-crpyto' style={{gap:'200px',justifyContent:'space-between',borderSpacing:'2px solid grey'}} >
            <span className='home-crypto-image'><img src={coin.image} /></span>
            <span className='home-crypto-name'><Link to={`/${coin.id}`}>{coin.name}</Link>
            <span className='home-crypto-price'>
              <span className='priceBtc'><Link to={`/${coin.id}`}>{coin.priceBtc}</Link>{" "}{" ."} BTC($){" "}</span>
              <span className='priceUsd'><Link to={`/${coin.id}`}><br/>${coin.priceUsd}</Link>{""} </span>
              <span className='usd'>USD</span>
            </span>
            </span>
          </div>
        );
      }
      )}
      </div>
    </div>
  )
}
