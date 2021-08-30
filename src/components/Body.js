import React from "react";
import BodyCategory from "./BodyCategory";
import BodyHeader from "./BodyHeader";
import BodyItem from "./BodyItem";
import Filters from "./Filters";
import NavigationPage from "./NavigationPage";


const Body = ({data, value, setValue, totalLength, isLogin}) => {
  //filter index
  const indexPageFilter = (itemIndex, valueIndexPage) =>{
      return itemIndex === valueIndexPage
  }

  //filter name
  const nameFilter = (itemName, filterName) => {
      return itemName.toLowerCase().indexOf(filterName) !== -1
  }

  //filter input value and name value
  const inputFilter = (itemName, filterInput, filterName) => {
    return (itemName.toLowerCase().indexOf(filterInput) !== -1 && nameFilter(itemName, filterName))
  } 
  return (
    <div className="body">
      <BodyHeader value={value} setValue={setValue} isLogin={isLogin}/>
      <div className="category">
        <BodyCategory />
      </div>
      <div className="product">
        <div className="grid wide">
          <h2 className="product-header">
            Sản Phẩm
            <div className="filter-product">
              <Filters value={value} setValue={setValue}/>
            </div>
          </h2>
          <div className="grid ">
            <div className="row">
              {data.filter((item) =>
                  (value.filters.inputValue) ? 
                  inputFilter(item.name, value.filters.inputValue, value.filters.name) :
                  (value.filters.name) ? nameFilter(item.name, value.filters.name) : 
                  indexPageFilter(item.index,value.valueIndexPage))
                .map((item, index) => <BodyItem key={index} item={item} value={value} setValue={setValue}/>)}
            </div>
          </div>
        </div>
      </div>
      <div className="nav-page">
        <NavigationPage value={value} setValue={setValue} totalLength={totalLength}/>
      </div>
    </div>
  );
};

export default Body;
