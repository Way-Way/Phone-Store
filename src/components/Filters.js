import React from "react";

const Filters = ({value, setValue}) => {

  const handleFilters = (event) => {
    let findValue = event.target.value
    findValue = findValue === 'Tất Cả' ? "" : event.target.value.toLowerCase()
    const newValue = {...value}
    newValue.filters.name = findValue
    setValue(newValue)
  }
  return (
    <select className="filters" onChange={handleFilters}>
      <option>Tất Cả</option>
      <option>oppo</option>
      <option>Vivo</option>
      <option>Iphone</option>
      <option>SamSung</option>
      <option>Xiaomi</option>
    </select>
  );
};

export default Filters;
