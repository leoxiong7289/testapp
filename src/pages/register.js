import React, { useState, useEffect } from "react";
import apiUrl from "../config";
import axios from "axios";
import styled from 'styled-components'

const RegisterCard = styled.div`
    width: 400px;
    height: 150px;
    background-color:#bbb;
    margin: 150px auto;
`

export default props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubscribe, setSubscribe] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] =useState('')

  useEffect(()=>{},[])

  const checkSubmit = () => {
    setIsLogging(true);
    // let regex = /\S+@\S+\.\S+/;
    if (!email) {
      alert("Email Address cannot be empty");
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
    let subscribeValue = isSubscribe ? 1 : 0; // follow requirement, transfer boolean to int type
    let dataProps = {
      'email': email,
      'password': password,
      'isSubscribe':subscribeValue
  }
  axios({
      method: 'post',
      url: apiUrl.register,
      data: dataProps,
      // withCredentials: true
  }).then(
      (res) => {
          setIsLogging(false)
          console.log(res.data)

          if(res.data.isSuccess===true) {
              // localStorage.setItem('token',res.data.data.token)
              alert('register success')
              setTimeout(()=>{
                props.history.push('/')
              },300)
          }
      }
  ).catch(
      (error) => {
        console.log(error.response)
       alert(error.response.data.errorMessage || error.response.data.errors.Password[0])
      })


  };

  // console.log("email, password, isSubscribe", email, password, isSubscribe);

  const checkEmailFormat = email => {
    let regex = /\S+@\S+\.\S+/
    if (!regex.test(email)) {
        setError('Email Address is not valid')
    } else {
        setError('')
    }
  }

  return (
    <RegisterCard className="register-div">
      {error && <div className='error' >{error}</div>}
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          onBlur={e =>{
            checkEmailFormat(e.target.value)
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
    </RegisterCard>
  );
};
