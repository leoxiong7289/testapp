import React, { useState, useEffect } from "react";
import apiUrl from "../config";
import axios from "axios";
// import { Link } from "react-router-dom";

export default props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubscribe, setSubscribe] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] =useState('')



  const checkSubmit = () => {
    setIsLogging(true);
    let regex = /\S+@\S+\.\S+/;
    if (!email) {
      alert("Email Address cannot be empty");
      setTimeout(() => {
        setIsLogging(false);
      }, 500);
      return false;
    } else if (!regex.test(email)) {
      alert("Email Address is not valid");
      setTimeout(() => {
        setIsLogging(false);
      }, 500);
      return false;
    } else if (!password) {
      alert("Password cannot be empty");
      setTimeout(() => {
        setIsLogging(false);
      }, 500);
      return false;
    }
    let subscribeValue = isSubscribe ? 1 : 0;
    if (email && password && subscribeValue) {
      alert("register succeed");
      props.history.push("/login");
    } else {
      alert("email address or password error or have registered");
    }

    setTimeout(() => {
      setIsLogging(false);
    }, 1000);
  };

  console.log("email, password, isSubscribe", email, password, isSubscribe);

  return (
    <div className="login-div">
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="please input email address"
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="subscribe">subscribe ? </label>
        <input
          type="checkbox"
          name="subscribe"
          value={isSubscribe}
          onChange={e => {
            setSubscribe(e.target.checked);
          }}
        />
      </div>
      <div>
        <button type="button" onClick={checkSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
