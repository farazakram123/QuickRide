import React from 'react'
import '../styles/Register.css'

export default function Register() {
    return (
        <div className="container-register">
            <div className="resister-page">
                <div className=" layout name">
                    <input className="first-name" type="text" placeholder='First Name' />
                    <input className="last-name" type="text" placeholder='Last Name' />
                </div>
                <div className=" layout phone">
                    <input type="number" className='set-inner-box' placeholder='Phone'/>
                </div>
                <div className=" layout email">
                    <input type="email" className='set-inner-box' placeholder='Email'/>
                </div>
                <div className=" layout pass">
                    <input type="password" className='set-inner-box' placeholder='Password'/>
                </div>
                <div className=" layout confirm-password">
                <input type="password" className='set-inner-box' placeholder='Confirm Password'/>
                </div>
                <div className="register-btn">
                    <div className="button">
                    <a href="">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
