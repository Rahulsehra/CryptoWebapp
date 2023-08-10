import React from 'react'
import homeStore from '../Store/homestore'

import { Link } from 'react-router-dom'

export default function ListItem( coin ) {
    const store = homeStore();

    store.coins.map(coin => {
  return (
    // <div>
    //         <Link to={`/${coin.id}`}>
    //           {coin.name}
    //         </Link>
    //       </div>
    <div className='home-crpyto' >
    <span className='home-crypto-image'><img src={coin.image} /></span>
    <span className='home-crypto-name'><Link to={`/${coin.id}`}>{coin.name}</Link>
    <span className='home-crypto-price'>
      <span><Link to={`/${coin.id}`}>{coin.priceBtc}</Link> BTC</span>
      <span><Link to={`/${coin.id}`}>{coin.priceUsd}</Link> USD</span>
    </span>
    </span>
  </div>
  )});
;
}
