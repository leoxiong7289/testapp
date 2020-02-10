import React,{ useState, useEffect } from 'react';
import apiUrl from '../config'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default (props) => {

    // define three state for this component, use hooks 
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const [isLogging, setIsLogging] =useState(false)
    const [error, setError] =useState('')

    // define a function to check validation of data when submit login
    const checkLogin = () => {
        setIsLogging(true) // freeze the button, avoid multiple click
        // check input values valid or not
        if(!email) {
            alert('Email Address cannot be empty')
            setTimeout(()=>{
                setIsLogging(false)
            },500)
            return false
        } else if(!password) {
            alert('Password cannot be empty')
            setTimeout(()=>{
                setIsLogging(false)
            },500)
            return false
        }
        // due to invalid api, just write a static mock to test
        if (email==='admin@example.com' && password==='123456') {
            const token='12345678'
            localStorage.setItem('token',token)
            props.history.push('/welcome')
        } else {
            alert('email address or password error')
        }
        // let dataProps = {
        //     'email': email,
        //     'password': password
        // }
        // axios({
        //     method: 'post',
        //     url: apiUrl.login,
        //     data: dataProps,
        //     withCredentials: true
        // }).then(
        //     (res) => {
        //         setIsLogging(false)
        //         console.log(res)
        //         if(res.data.data==='login successful') {
        //             localStorage.setItem('token',res.data.token)
        //             props.history.push('/welcome')
        //         } else {
        //             alert('error')
        //         }
        //     }
        // )
        setTimeout(()=>{
            setIsLogging(false)
        },1000)
    }

    const checkEmailFormat = email => {
        let regex = /\S+@\S+\.\S+/
        if (!regex.test(email)) {
            setError('Email Address is not valid')
        } else {
            setError('')
        }
    }


    return(
        <div className='login-div'>
            {error && <div className='error' >{error}</div>}
            <div>
                <label htmlFor='email'>Email: </label>
                <input 
                    type='email'
                    name='email'
                    value={email}
                    onChange={e=>{
                        setEmail(e.target.value)
                    }}
                    placeholder='please input email address'
                    onBlur={e=>{
                        checkEmailFormat(e.target.value)
                    }}
                />
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={e=>{
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <div>
                <Link to='/register/' >Register</Link>
            </div>
            <div>
                <button
                    type='button'
                    onClick={checkLogin}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}