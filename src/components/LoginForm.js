import React from "react";
import { Link } from "react-router-dom";
import userLocalStorage from "../util/userLocalStore";
const LoginForm = () => {
  const userStore = userLocalStorage.get();

  //handle on input form
  const handleOninput = (event) => {
    event.target.parentElement.classList.remove("invalid");
  };

  //handle submit form
  const handleOnsubmit = (event) => {
    event.preventDefault();
    const inputElement = event.target.querySelectorAll('input')
    const nameInput = inputElement[0].value
    const passwordInput = inputElement[1].value
    const element = event.target.querySelectorAll('.form-group')
    
    userStore.forEach(user => {
        if(user.name === nameInput && user.password === passwordInput){
            element.forEach(e => e.classList.remove('invalid'))
            localStorage.setItem("isLogin", JSON.stringify({
              isLogin: true
            }))
            window.location.href = "/";
        }else{
            element.forEach(e => e.classList.add('invalid'))
        }
    })
  };
  return (
    <form className="form-login" onSubmit={handleOnsubmit}>
      <div className="form-wrap">
        <h2 className="form-header">Đăng Nhập Tài Khoản</h2>
        <div className="form-group">
          <input
          autoComplete="user names"
            type="text" name="name"
            placeholder="User name .."
            onInput={handleOninput}
          />
          <p>Cần Nhập Lại Trường Này</p>
        </div>
        <div className="form-group ">
          <input name="password"
            type="password"
            placeholder="Password .."
            onInput={handleOninput} autoComplete="current-password"
          />
          <p>Cần Nhập Lại Trường Này</p>
          <i className="far fa-eye-slash show-password"></i>
        </div>
        <div className="form-description">
          <p>Bạn Chưa Có Tài Khoản ?</p>
          <Link to="/registry">Đăng Ký</Link>
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

export default LoginForm;
