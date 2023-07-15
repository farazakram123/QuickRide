import React from 'react'
import image from "../images/mainCar.png"
import "../styles/Car.css";

export default function Car() {
    return (
        <>
            <div className="container2">
                <div className="text">
                    <h2 className='plan-your-trip'>Plan your trip now</h2>
                    <h1 className='save-big'>Save <span className='big'>big</span> with our car Rides</h1>
                    <p className='rent-car'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <div className="btns">
                        <a href="/" className='book-ride'>Book Ride</a>
                        <a href="/" className='learn-more'>Learn More</a>
                    </div>
                </div>
                <div className="imageDiv">
                    <img className="image" src={image} alt="" />
                </div>
            </div>
        </>
    )
}
