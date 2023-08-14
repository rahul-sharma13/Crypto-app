import React from 'react';
import { CoinSearch, Trending } from '../components';

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  )
}

export default Home