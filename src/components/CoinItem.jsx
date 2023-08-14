import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';  //used for updation of array stored in db.

const CoinItem = ({coin,index}) => {
  // console.log(coin);
  const changePercent = coin.price_change_percentage_24h;
  //console.log(changePercent);
  const fixChangePercent = changePercent.toFixed(2);  //to show till two decimal place.
  //console.log(fixChangePercent);
  const capSymbol = coin.symbol.toUpperCase();  //done to get captilized symbols
  //console.log(capSymbol);  
  //console.log(index);  
  
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();
  
  const coinPath = doc(db, 'users', `${user?.email}`)  //defining the path of change. Applied to specific user email.

  const saveCoin = async () => {
    if(user?.email){
        setSavedCoin(true)
        await updateDoc(coinPath,{
            watchList: arrayUnion({
                id: coin.id,
                name: coin.name,
                image: coin.image,
                rank: coin.market_cap_rank,
                symbol: coin.symbol
            })
        })
    } else {
        alert('Please sign in!')
    }
  }

  return ( 
    <tr className={`overflow-hidden h-[80px] ${index !== 9 ? 'border-b' : 'border-none'}`}>
        <td onClick={saveCoin} > 
          {savedCoin ? <AiFillStar /> : <AiOutlineStar /> }  
        </td>
        <td> {coin.market_cap_rank} </td>
        <td>
            <Link to={`/coin/${coin.id}`}>
                <div className='flex items-center'>
                    <img className='w-6 mr-2 rounded-full' src={coin.image} alt={coin.id}/>
                    <p className='hidden sm:table-cell'>{coin.name}</p>
                </div>
            </Link> 
        </td>
        <td> { capSymbol } </td>
        <td> ${coin.current_price.toLocaleString()} </td>
        <td> 
            {coin.price_change_percentage_24h > 0 ? (<p className='text-green-600'>{`${fixChangePercent}%`}</p>) : (<p className=' text-red-600'>{`${fixChangePercent}%`}</p>) } 
        </td>
        <td className='w-[180px] hidden md:table-cell'> ${coin.total_volume.toLocaleString()}  </td>
        <td className='w-[180px] hidden sm:table-cell'> ${coin.market_cap.toLocaleString()} </td>
        <td> 
            <Sparklines data={coin.sparkline_in_7d.price} >
                <SparklinesLine color='teal'/>
            </Sparklines> 
        </td>
    </tr>
  )
}

export default CoinItem