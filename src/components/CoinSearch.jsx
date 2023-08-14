import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {
  // console.log(coins)
  const [searchText, setSearchText] = useState('');
  return (
    <div className='rounded-div my-4'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
        <form>
          <input onChange={(e) => setSearchText(e.target.value)} type='text' placeholder='Search a coin' className=' text-black w-full border border-input shadow-xl rounded-2xl px-4 py-2 border-gray-500'/>
        </form>
      </div>

      <table className='w-full text-center border-collapse'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell' >24h Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins.filter((value) => {
            if (searchText === '') {
              return value
            } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
              return value
            }
          }).map((coin,index) => (
            <CoinItem key={coin.id} coin={coin} index={index}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch