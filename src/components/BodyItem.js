import React from "react";

const BodyItem = ({ item, value, setValue }) => {

  // add product to cart
  const handleClickBuy = (event) => {
    const currentStatus = event.target.textContent
    const newValue = { ...value};
    if(currentStatus === 'Buy'){
      newValue.cart.push({...item, quantity: 1});
      setValue(newValue)
    }else{
      newValue.cart.forEach((i, index) => {
        if(i.id === item.id){
          newValue.cart.splice(index, 1)
          setValue(newValue)
        }
      })
    }
  }

  //Change Status button when item is removed from cart
  const setStatusBtn = () => {
      let status = false
      value.cart.forEach(i => {
        if(i.id === item.id) status = true
      })
      return status
  }
  return (
    <div className="product-item col l-2-4 m-4 c-6">
      <img src={item.image} alt="Phone" />
      <div className="sale">Sale !</div>
      <div className="product-info">
        <h4>{item.name}</h4>
        <div className="product-price">
          <p className="product-price-current">{item.priceCurrent}VNĐ</p>
          <p className="product-price-old">{item.priceOld}VNĐ</p>
        </div>
        <button onClick={handleClickBuy}>{setStatusBtn() ? "Done !!" : "Buy"}</button>
      </div>
    </div>
  );
};

export default BodyItem;
