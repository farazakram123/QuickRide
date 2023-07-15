import React from 'react'
import '../styles/Description.css'
import selectCar from '../images/selectCar.png'
import contactOperator from '../images/contactOperator.png'
import letsDrive from '../images/letsDrive.png'

export default function Description() {
    return (
        <div>
            <>
                <div className="container">
                    <div className="outer-box">
                        {/* box1 starts here */}
                        <div className="inner-box1">
                            <div className="plan-your-trip">
                                <p className="pyt">Plan your trip now</p>
                            </div>
                            <div className="quick-and-easy-car-rental">
                                <p className="qaecr">Quick & easy car rental</p>
                            </div>
                        </div>

                        {/* box2 starts here */}
                        <div className="inner-box2">
                            <div className="box2-inner-box" id='box2-inner-box1'>
                                <img src={selectCar} alt="select-car" className='small-images' />
                                <h2>Select Car</h2>
                                <div className="inner-text">
                                    <p>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                                </div>
                            </div>
                            <div className="box2-inner-box" id='box2-inner-box2'>
                                <img src={contactOperator} alt="contact-operator" className='small-images' />
                                <h2>Contact Operator</h2>
                                <div className="inner-text">
                                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                                </div>
                            </div>
                            <div className="box2-inner-box" id='box2-inner-box3'>
                                <img src={letsDrive} alt="lets-drive" className='small-images' />
                                <h2>Lets Drive</h2>
                                <div className="inner-text">
                                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}
