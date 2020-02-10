import React from 'react';
import { Link } from 'react-router-dom';



export default (props)=> {

    let token = localStorage.getItem('token')
    if(token) {
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
                <button>
                    Logout
                </button>
            </Link>
        </div>
    )
}