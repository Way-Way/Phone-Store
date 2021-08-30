import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="mobile-logo"><Link to="/">Nova</Link></h2>
      <label htmlFor="checkbox-menu" className="wrap-icon-menu">
        <i className="icon-menu fas fa-bars"></i>
      </label>
      <input type="checkbox" name="input" id="checkbox-menu" />
      <ul className="navbar__section navbar__category">
        <Link to="/"><li className="navbar__item">Về trang chủ</li></Link>
        <Link to="/kinh-doanh"><li className="navbar__item">Kinh Doanh</li></Link>
        <Link to="/he-thong-phan-phoi"><li className="navbar__item">Hệ Thống Phân Phối</li></Link>
        <Link to="/kien-thuc"><li className="navbar__item">Kiến Thức</li></Link>
      </ul>
      <ul className="navbar__section navbar__contact">
        <li className="navbar__item">
          <i className="fas fa-phone"></i>03301242
        </li>
        <li className="navbar__item">
          <i className="fas fa-sign-out-alt"></i>Yêu Thích
        </li>
        <li className="navbar__item">
          <i className="fas fa-key"></i>Liên hệ
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
