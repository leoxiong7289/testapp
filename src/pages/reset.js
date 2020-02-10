import React,{ useState, useEffect } from 'react';
import apiUrl from '../config'
import axios from 'axios'
import styled from 'styled-components'

const ResetCard = styled.div`
    width: 400px;
    height: 150px;
    background-color:#bbb;
    margin: 150px auto;
`


export default (props) => {

    const [email, setEmail] =useState('')
    const [oldPassword, setOldPassword] =useState('')
    const [newPassword, setNewPassword] =useState('')
    const [isLogging, setIsLogging] =useState(false)
    const [error, setError] =useState('')

    useEffect(()=>{},[])

    const checkSubmit = () => {
        setIsLogging(true)
        // let regex = /\S+@\S+\.\S+/
        if(!email) {
            alert('Email Address cannot be empty')
            setTimeout(()=>{
                setIsLogging(false)
            },500)
            return false     
        } 
        // else if(!regex.test(email)){
        //     alert('Email Address is not valid')
        //     setTimeout(()=>{
        //         setIsLogging(false)
        //     },500)
        //     return false
        // } 
        else if(!oldPassword || !newPassword) {
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
    }

    const checkEmailFormat = email => {
        let regex = /\S+@\S+\.\S+/
        if (!regex.test(email)) {
            setError('Email Address is not valid')
        } else {
            setError('')
        }
    }

    // alternate the react-router-guards 
    let token = localStorage.getItem('token')
    if(!token) {
        alert('please login')
        props.history.push('/')
    }

    return(
        
        <ResetCard className='reset-div'>
            {error && <div className='error' >{error}</div>} // display error message if error occur
            <div>
                <label htmlFor='email'>Email: </label>
                <input 
                    type='email'
                    name='email'
                    value={email}
                    onChange={e=>{
                        setEmail(e.target.value)
                    }}
                    onBlur={e=>{
                        checkEmailFormat(e.target.value)
                    }}
                    placeholder='please input email address'
                />
            </div>
            <div>
                <label htmlFor='oldPassword'>Old Password: </label>
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
                <label htmlFor='newPassword'>New Password: </label>
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
        </ResetCard>
    )
}