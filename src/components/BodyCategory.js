import React from "react";

const BodyCategory = () => {
  return (
    <ul>
      <li>Trang Chủ</li>
      <li>
        Sản Phẩm
        <ul className="user-option category-option">
          <li className="">oppo</li>
          <li className="">xiaomi</li>
          <li className="">iphone</li>
          <li className="">SamSung</li>
        </ul>
      </li>
      <li>Tin Tức</li>
      <li>Giới Thiệu</li>
      <li>
        Liên Hệ
        <ul className="user-option category-option">
          <li className="">review 1</li>
          <li className="">review 2</li>
          <li className="">review 3</li>
        </ul>
      </li>
    </ul>
  );
};

export default BodyCategory;
