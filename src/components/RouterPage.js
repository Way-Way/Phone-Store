import React, { useState, useEffect } from "react";
import App from "../App";
import LoginForm from "./LoginForm";
import RegistryForm from "./RegistryForm";
import ProductStore from './ProductStore'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BusinessNavbar from "./BusinessNavbar";
import dataStore from "../util/getData";
const RouterPage = () => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin")) || { isLogin: false}
    //get api product data
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(dataStore)
    }, [])
  return (
    <Router>
      <Switch>
      <Route path= "/login" >
          <LoginForm />
        </Route>
        <Route path="/registry" >
          <RegistryForm />
        </Route>
        <Route path="/product-store" >
          <ProductStore data={data}/>
        </Route>
        <Route path="/kinh-doanh" >
          <BusinessNavbar/>
        </Route>
        <Route path="/he-thong-phan-phoi" >
          <BusinessNavbar/>
        </Route>
        <Route path="/kien-thuc" >
          <BusinessNavbar/>
        </Route>
        <Route path="/">
          <App isLogin={isLogin} data={data} setData={setData}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterPage;
