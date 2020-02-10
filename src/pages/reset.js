import React,{ useState, useEffect } from 'react';
import apiUrl from '../config'
import axios from 'axios'



export default (props) => {

    const [email, setEmail] =useState('')
    const [oldPassword, setOldPassword] =useState('')
    const [newPassword, setNewPassword] =useState('')
    const [isLogging, setIsLogging] =useState(false)
    const [error, setError] =useState('')



    const checkSubmit = () => {
        setIsLogging(true)
        let regex = /\S+@\S+\.\S+/
        if(!email) {
            alert('Email Address cannot be empty')
            setTimeout(()=>{
                setIsLogging(false)
            },500)
            return false
        } else if(!regex.test(email)){
            alert('Email Address is not valid')
            setTimeout(()=>{
                setIsLogging(false)
            },500)
            return false
        } else if(!oldPassword || !newPassword) {
            alert('oldPassword and newPassword cannot be empty')
            setTimeout(()=>{
                setIsLogging(false)
            },500)
            return false
        } else if(oldPassword===newPassword) {
            alert('newPassword cannot equal oldPassword ')
            setTimeout(()=>{
                setIsLogging(false)
            },500)
        }
         
        if (email && oldPassword && newPassword && oldPassword!==newPassword) {
            alert('password reset succeed')
            props.history.push('/welcome')
        } else {
            alert('email address or password error')
        }

        setTimeout(()=>{
            setIsLogging(false)
        },1000)
    }

    let token = localStorage.getItem('token')
    if(token) {
        alert('please login')
        props.history.push('/')
    }

    return(
        
        <div className='login-div'>
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
                />
            </div>
            <div>
                <label htmlFor='oldPassword'>Password: </label>
                <input 
                    type='password'
                    name='oldPassword'
                    value={oldPassword}
                    onChange={e=>{
                        setOldPassword(e.target.value)
                    }}
                />
            </div>
            <div>
                <label htmlFor='newPassword'>Password: </label>
                <input 
                    type='password'
                    name='newPassword'
                    value={newPassword}
                    onChange={e=>{
                        setNewPassword(e.target.value)
                    }}
                />
            </div>
            <div>
                <button
                    type='button'
                    onClick={checkSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}