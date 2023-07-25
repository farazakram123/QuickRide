import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className='footerContainer'>
            <div className="footerBox">
                <div className="box1-part1">
                    <h2>CAR Rental</h2>
                    <p>We offer a big range of vehicles for all your driving needs.</p>
                </div>
                <div className="box1-part2">
                    <p>123-456-789</p>
                    <p>quickride@gmail.com</p>
                    <p>Designed by - Faraz</p>
                </div>
            </div>
            <div className="footerBox" id='box2'>
                <h2>COMPANY</h2>
                <p>New York</p>
                <p>Careers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How we Work</p>
            </div>
            <div className="footerBox" id='box3'>
                <h2>Working Hours</h2>
                <p>Mon-Fri : 9:00 AM - 9:00 PM</p>
                <p>Sat : 9:00 AM - 5:00 PM</p>
                <p>Sun : Closed</p>
            </div>
            <div className="footerBox" id = 'box4'>
                <div className="subscription">
                    <h2>Subscription</h2>
                    <p>Subscribe your Email address for latest news & updates.</p>
                </div>
                <div className="emailSubmit">
                    <input type='text' className="emailInput" placeholder='Enter Email Address'>
                        
                    </input>
                    <button className="emailInput">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
