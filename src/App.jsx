import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, SignUp, Signin, Account, CoinPage } from "./routes";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";
  
  useEffect(()=>{
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data)
    })
  },[url])

  return (
      <ThemeProvider>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home coins={coins} />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/account' element={<Account />} />
            <Route path='/coin/:coinId' element={<CoinPage />}> // :coinId done to get  dynamic route
              <Route path=':coinId'/>
            </Route>
          </Routes>
          <Footer />
        </AuthContextProvider>
      </ThemeProvider>
  )
}

export default App