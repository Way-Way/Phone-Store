import React from "react";

const CartItem = ({item, value, setValue}) => {


    // add product in cart
    const handleAddItem = () =>{
        const newValue = {...value}
        newValue.cart.forEach((i,index) =>{
          if(i.id === item.id){
            newValue.cart[index].quantity += 1
            setValue(newValue)
          }
        })
    }

    //sub product in cart
    const handleSubItem = () => {
      const newValue = {...value}
        newValue.cart.forEach((i,index) =>{
          if(i.id === item.id){
            if(newValue.cart[index].quantity > 1) newValue.cart[index].quantity -= 1
            else if(newValue.cart[index].quantity <= 1) newValue.cart.splice(index, 1)
          }
          setValue(newValue)
        })
    }

  return (
    <li className="cart-item">
      <div className="item-img">
        <img src={item.image} alt="img" />
      </div>
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <div className="item-counts">
          <i className={item.quantity === 0 ? "noClick fas fa-minus" : "fas fa-minus"} 
          onClick={handleSubItem}></i>
          <p className="item-count">{item.quantity}</p>
          <i className="fas fa-plus" onClick={handleAddItem}></i>
        </div>
      </div>
      <p className="total-price">{(item.priceCurrent * item.quantity).toLocaleString('en-US')} VND</p>
    </li>
  );
};

export default CartItem;
