import React, { useState } from "react";
import { Link } from "react-router-dom";
import userLocalStore from "../util/userLocalStore";

//information of users
const userStore = []

// form Registry
const RegistryForm = () => {
  const [information, setInformation] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
  });

  //handle on input form
  const handleOninput = (event) => {
    event.target.parentElement.classList.remove("invalid");
  };
  //handle blur form input
  const handleBlur = (event) => {
    const regexName = /^[a-z ,.'-]+$/i;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const inputTag = event.target;
    const valueInput = inputTag.value;
    if (inputTag.name === "name") {
      if (regexName.test(valueInput)) {
        inputTag.parentElement.classList.remove("invalid");
        const newInformation = { ...information };
        newInformation.name = valueInput;
        setInformation(newInformation);
      } else {
        inputTag.parentElement.classList.add("invalid");
      }
    } else if (inputTag.name === "password") {
      if (regexPassword.test(valueInput)) {
        const newInformation = { ...information };
        newInformation.password = valueInput;
        setInformation(newInformation);
        inputTag.parentElement.classList.remove("invalid");
      } else {
        inputTag.parentElement.classList.add("invalid");
      }
    } else if (inputTag.name === "password-confirmation") {
      if (information.password === inputTag.value) {
        const newInformation = { ...information };
        newInformation.passwordConfirm = valueInput;
        setInformation(newInformation);
        inputTag.parentElement.classList.remove("invalid");
      } else {
        inputTag.parentElement.classList.add("invalid");
      }
    }
  };

  //handle submit form
  const handleOnsubmit = (event) => {
    event.preventDefault();
    if (information.passwordConfirm && information.name) {
      userStore.push(information)
      userLocalStore.set(userStore)
      localStorage.setItem("isLogin", JSON.stringify({
        isLogin: true
      }))
      window.location.href = "/";
    }
  };

  //handle show Pass word
  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleShowPassword = () => {
    const isStatus = !isShowPassword
    setIsShowPassword(isStatus) 
  }
  return (
    <form className="form-login" onSubmit={handleOnsubmit}>
      <div className="form-wrap">
        <h2 className="form-header">Đăng Ký Tài Khoản</h2>
        <div className="form-group" onBlur={handleBlur} onInput={handleOninput}>
          <input
            type="text"
            name="name"
            placeholder="User name .."
            autoComplete="userName"
          />
          <p>Cần Nhập Lại Trường Này</p>
        </div>
        <div
          className="form-group "
          onBlur={handleBlur}
          onInput={handleOninput}
        >
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            placeholder="Password .."
            autoComplete="current-password"
          />
          <p>Cần Nhập Lại Trường Này</p>
          <i className="far fa-eye-slash show-password" onClick={handleShowPassword}></i>
        </div>
        <div className="form-group" onBlur={handleBlur} onInput={handleOninput}>
          <input
            type="password"
            name="password-confirmation"
            placeholder="Password .."
            autoComplete="new-password"
          />
          <p>Cần Nhập Lại Trường Này</p>
        </div>
        <div className="form-description">
          <p>Bạn Có Tài Khoản ?</p>
          <Link to="/login">Đăng Nhập</Link>
          <span>-- or --</span>
          <Link to="/">Trở Lại Trang Chủ</Link>
        </div>
        <div className="other-option">Other</div>
        <div className="other-links">
          <div className="link-item">
            <i className="fab fa-facebook-square"></i>
            <p>
              <a href="https://www.facebook.com/">Facebook</a>
            </p>
          </div>
          <div className="link-item">
            <i className="fab fa-google-plus-square"></i>
            <p>
              <a href="http://">Google</a>
            </p>
          </div>
        </div>
        <div className="form-submit">
          <button>Send</button>
        </div>
      </div>
    </form>
  );
};

export default RegistryForm;
