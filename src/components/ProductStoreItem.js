import React from "react";

const ProductStoreItem = ({item}) => {
  return (
    <div className="product-item col l-2-4 m-4 c-6">
      <img src={item.image} alt="Phone" />
      <div className="product-info">
        <h4>{item.name}</h4>
        <div className="product-price">
          <p className="product-price-current">current price: {item.priceCurrent} VND</p>
          <p className="product-price-old">old price: {item.priceOld} VND</p>
        </div>
        <div>
          <p className="product-origin">origin: {item.origin}</p>
          <p className="product-quantity">Quantity: {item.total}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStoreItem;
