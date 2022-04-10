import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  

  const handleLogIn = (e) => {
    console.log(isLoggedIn)
    e.preventDefault()
    dispatch(login())
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleLogIn}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
