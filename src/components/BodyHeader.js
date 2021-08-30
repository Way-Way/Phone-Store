import React, { useState } from "react";
import Filters from "./Filters";
import { Link } from "react-router-dom";

const BodyHeader = ({ value, setValue, isLogin }) => {

  //value input of search item
  const [valueInput, setValueInput] = useState();

  //get value when user change input tag
  const getInputValue = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setValueInput(value);
  };

  //handle submit form: set value from input tag to value
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const newValue = { ...value };
    value.filters.inputValue = valueInput;
    setValue(newValue);
  };

  // handle show cart
  const handleShowCart = () => {
    const newValue = { ...value };
    newValue.isShowCart = true;
    setValue(newValue);
  };

  //handle set information user
  const handleConfirmInformation = (event) =>{
      const elementInput = event.target
      const newValue = {...value}
      if(elementInput.name === "name"){
        newValue.isConfirmInfo.name = elementInput.value.trim() 
      }else if(elementInput.name === "phone"){
        newValue.isConfirmInfo.telePhone = Number(elementInput.value)
      }else if(elementInput.name === "address"){
        newValue.isConfirmInfo.address = elementInput.value.trim()
      }
      setValue(newValue)
  }

  //handle on Submit Form user information
  const handleOnSubmitInformation = (event) => {
    event.preventDefault()
    const newValue = {...value}
    if(newValue.isConfirmInfo.name && newValue.isConfirmInfo.telePhone && newValue.isConfirmInfo.address){
      newValue.isConfirmInfo.isConfirm = true
      localStorage.setItem('user-information', JSON.stringify(newValue.isConfirmInfo))
    }else{
      newValue.isConfirmInfo.isConfirm = false
    }
    setValue(newValue)
  }

  //get user information from localStore
  const getInformationValue = () =>{
    const informationValue = JSON.parse(localStorage.getItem('user-information'))
    return informationValue
  }

  //handle log out
  const handleExit = () =>{
    localStorage.setItem('isLogin', JSON.stringify({isLogin: false}))
    window.location.href = "/";
  }
  return (
    <header className="Header">
      <h2 className="header__logo">
        <Link to="/">Nova</Link>
      </h2>
      <form className="header__form" onSubmit={handleSubmitForm}>
        <input type="text" placeholder="Search.." onChange={getInputValue} />
        <Filters value={value} setValue={setValue} />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="header__information">
        <ul>
          <li className="header__information-item">
            <Link to="/product-store">
              <i className="far fa-calendar-check"></i>
              Kiểm Tra Đơn Hàng
            </Link>
          </li>
          <li className="header__information-item user">
            <label htmlFor="#user-option">Tài Khoản</label>
            <i className="icon-arrow fas fa-angle-down"></i>
            <input type="checkbox" name="" id="#user-option" className="none"/>
            {isLogin && !isLogin.isLogin ? (
              <ul className="user-option">
                <Link to="/login">
                  <li>
                    <i className="fas fa-user-circle"></i>
                    Login
                  </li>
                </Link>
                <Link to="/registry">
                  <li>
                    <i className="fas fa-plus"></i>
                    Registry
                  </li>
                </Link>
              </ul>
            ) : (
              <form onSubmit={handleOnSubmitInformation}>
                <ul className="user-option user-login">
                  <li>Thông Tin Tài Khoản</li>
                  <li className="user-information">
                     Name: <input type="text" name="name" defaultValue={getInformationValue()  ?
                       getInformationValue().name : ""} onChange={handleConfirmInformation}/>
                  </li>
                  <li className="user-information">
                    TelePhone: <input type="text" name="phone" defaultValue={getInformationValue() ? 
                      getInformationValue().telePhone : ""} onChange={handleConfirmInformation}/>
                  </li>
                  <li className="user-information">
                    Address: <input type="text" name="address" defaultValue={getInformationValue() ? 
                      getInformationValue().address : ""} onChange={handleConfirmInformation}/>
                  </li>
                  <li>
                      <button><label htmlFor="#user-option">OK</label></button>
                      <button onClick={handleExit} className="exit"><label htmlFor="#user-option">Log Out</label></button>
                  </li>
                </ul>
              </form>
            )}
          </li>
          <li className="header__information-item" onClick={handleShowCart}>
            <i className="icon-cart fas fa-shopping-cart"></i>
            <span className="cart-count">
              {value.cart.reduce((initial, i) => {
                return initial + i.quantity;
              }, 0)}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default BodyHeader;
