import React from "react";

const NavigationPage = ({value, setValue, totalLength}) => {

  const handleClickIndexPage = (event) => {
    let index = Number(event.target.textContent)
    const newValue={...value}
    newValue.valueIndexPage = index
    setValue(newValue)
  }
  const handleNextPageOne = (event) => {
    const valueIndex = (event.target.value)
    const newValue = {...value}
    newValue.valueIndexPage += valueIndex
    setValue(newValue)
  }
  const totalPage = Math.round(totalLength/12)
  return (
    <ul>
      <li value={-1} className={value.valueIndexPage > 1 ? "" : "noClick"} 
      onClick={handleNextPageOne} >
        <i className="fas fa-angle-left"></i>
      </li>
      <li className={value.valueIndexPage === 1 ? "active" : ""}
      onClick={handleClickIndexPage}>1</li>
      <li className={value.valueIndexPage === 2 ? "active" : ""}
      onClick={handleClickIndexPage}>2</li>
      <li className={value.valueIndexPage === 3 ? "active" : ""}
      onClick={handleClickIndexPage}>3</li>
      <li className={value.valueIndexPage === 4 ? "active" : ""}
      onClick={handleClickIndexPage}>4</li>
      <li>..</li>
      <li>End</li>
      <li value={1} className={totalPage > 0 && value.valueIndexPage <= totalPage ? "" : "noClick"}
       onClick={handleNextPageOne} >
        <i className="fas fa-angle-right"></i>
      </li>
    </ul>
  );
};

export default NavigationPage;
