import React from 'react'
import "./css/login.css"
import {useNavigate} from 'react-router-dom'
function Login() {
    const nevigate = useNavigate();
    const change  = ()=>
    {
        nevigate('/home')
    }
  return (
    <div className="container">
        <div className="loginBox">
            <div className="header">
                <span>Login</span>
            </div>
            <form action="">
                <div className="field">
                    <div className="label">
                        <span>Email</span>
                    </div>
                    <input type="email" placeholder='Enter Email here'/>
                </div>
                <div className="field">
                    <div className="label">
                        <span>Password</span>
                    </div>
                    <input type="password" placeholder='Enter Password' />
                </div>
                <div className="forget">
                    <span>Forget Password ?</span>
                </div>
                <div className="submit">
                    <button type='submit' onClick={change}>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login