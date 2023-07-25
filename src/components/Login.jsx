import React from 'react'
import '../styles/Login.css'

export default function Login() {
    return (
        <div className="container-login">
            <div className="login-page">
                <div className="inner-login-page">
                    <div className="layout email">
                        <input type="email" className='set-inner-box' placeholder='Email' />
                    </div>
                    <div className=" layout pass">
                        <input type="password" className='set-inner-box' placeholder='Password' />
                    </div>
                    <div className="register-btn">
                        <div className="button">
                            <a href="">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}