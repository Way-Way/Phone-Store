
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import CartStore from "./components/CartStore";
import Footer from "./components/Footer";
import React, { useState } from 'react';



function App({isLogin, data, setData}) {

  const totalLength = data.length
  const [value, setValue] = useState({
    valueIndexPage: 1,
    isShowCart: false,
    isConfirmInfo: {
      name: '',
      telePhone: 0,
      address: '',
      isConfirm: false 
    },
    cart: [],
    filters: {
      name: '',
      inputValue: ''
    }
  })

  return (
      <div className="main">
        <Navbar/>
        <Body isLogin={isLogin} data={data} value={value} setValue={setValue} totalLength={totalLength}/>
        { value.isShowCart && <CartStore value={value} setValue={setValue} isLogin={isLogin}/>}
        <Footer/>
      </div>
  );
}

export default App;
