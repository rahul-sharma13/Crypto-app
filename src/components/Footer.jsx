import React from 'react';
import ThemeToggle from './ThemeToggle';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {  
  const listItemsTwo = [
        "About Us",
        "Careers",
        "Invest",
        "Legal"
  ]

  const listItemsOne = [
    "Help Center",
     "Contact Us",
     "API Status",
     "Documentation"
  ]

  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              {listItemsOne.map((item,index) => (
                <li key={index} className='text-sm py-2 cursor-pointer hover:text-accent'>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
                {listItemsTwo.map((item,index) => (
                    <li key={index} className='text-sm py-2 cursor-pointer hover:text-accent'>{item}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right text-accent'>Sign up for crypto news</p>
              <div className='py-4'>
                <form>
                  <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Enter your email' />
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign up</button>
                </form>
              </div>
              <div className='flex py-4 justify-between text-accent'>
                <AiOutlineInstagram cursor='pointer'/>
                <FaTwitter cursor='pointer'/>
                <FaFacebookF cursor='pointer'/>
                <FaGithub cursor='pointer'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-4'>API used - CoinGecko Public</p>
    </div>
  )
}

export default Footer