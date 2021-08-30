import React, {useState} from "react";
import Navbar  from "./Navbar";
import ProductStoreItem from "./ProductStoreItem";
const ProductStore = ({data}) => {

    const [inputValue, setInputValue] = useState()
    //handle get input value
    const getInputValue = (event) => {
       const value = event.target.value.toLowerCase().trim()
        setInputValue(value)
    }
  return (
    <div>
      <Navbar />
      <div className="product-store">
        <div className="product-title">
          <p>Nhập sản phẩm cần xem thông tin</p>
          <input type="text" placeholder="search.." onChange={getInputValue}/>
        </div>
        <div className="grip">
          <div className="row">
              {inputValue && data.filter(item => item.name.toLowerCase().indexOf(inputValue) !== -1)
              .map((item, index) => <ProductStoreItem key={index} item={item}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStore;
