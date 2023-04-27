import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button>login</button>
                <span>Don't you have an account ? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login