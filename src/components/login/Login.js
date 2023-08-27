import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const registerHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="submit"
            onClick={signInHandler}
            className={`${
              !email || !password
                ? "button__notAllowed login__signIn_button"
                : "login__signIn_button"
            }`}
            disabled={!email || !password}
          >
            Sign In
          </button>
        </form>
        <p style={{ textAlign: "center" }}>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className={`${
            !email || !password
              ? "button__notAllowed login__register_button"
              : "login__register_button"
          }`}
          onClick={registerHandler}
          disabled={!email || !password}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
