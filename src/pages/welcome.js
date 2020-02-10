import React from 'react';
import { Link } from 'react-router-dom';



export default (props)=> {

    // to alternate react-rotuer-guard, because the guard have a weird issue in my runtime
    let token = localStorage.getItem('token')
    if(!token) {
        alert('please login')
        props.history.push('/')
    }

    return (
        <div>
            <p>This is welcome page.</p>
            <Link to='/reset/'>
                <button>
                    Reset Password
                </button>
            </Link>

            <Link to='/'>
                <button
                    onClick={()=>{localStorage.removeItem('token')}}
                >
                    Logout
                </button>
            </Link>
        </div>
    )
}