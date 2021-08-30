

import React from 'react';
import CartItem from './CartItem';

const CartStore = ({value, setValue}) => {

    //handle hide cart
    const handleHideCart = () => {
        const newValue = {...value}
        newValue.isShowCart = false
        setValue(newValue)
    }

    //handle buy item
    const handleBuy = (event) => {
        const isConfirm = JSON.parse(localStorage.getItem('user-information'))
        const isLogin = JSON.parse(localStorage.getItem('isLogin'))
        if(isLogin && isConfirm && isConfirm.isConfirm){
            if(event.target.textContent === "cancel"){
                event.target.textContent = "Thanh Toán"
                event.target.style.background = '#3fe9f5'
            }else{
                event.target.textContent = "cancel"
                event.target.style.background = 'red'
            }
        }else if(!isLogin){
            alert("You must Login to Buy product")
        }else if((isConfirm && !isConfirm.isConfirm) || !isConfirm){
            alert("You must confirm information to buy product")
        }
    }
    return (
        <div className="cart-store">
            <ul className="cart-list">
            <h2 className="cart-title">Danh sách Sản Phẩm</h2>
            <i className="far fa-times-circle icon-close" onClick={handleHideCart}></i>
            {value.cart.map((item, index) => 
            <CartItem key={index} item={item} value={value} setValue={setValue}/>)}
                {value.cart.length > 0 &&
                    <p className="price-total">Tổng Tiền: {value.cart.reduce((prevValue, item) => {
                        return prevValue + item.priceCurrent * item.quantity
                    }, 0).toLocaleString('en-US')}VND</p>}
                 {value.cart.length > 0 &&
                    <button className="cart-done" onClick={handleBuy}>Thanh Toán</button>}
            </ul>
        </div>
    );
};

export default CartStore;