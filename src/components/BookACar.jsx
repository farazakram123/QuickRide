import React from 'react'
import "../styles/BookACar.css"

function BookACar() {
    return (
        <>
            <div className="bookACar">
                <div className="box">
                    <h1>Book a car</h1>
                    <div className="box1">
                        <div className="bookACarOptions">
                            <p>Select your car type</p>
                            <select name="" id="" className='select-option'>
                                <option value="carType">Select your car type</option>
                                <option value="audi">Audi A6</option>
                                <option value="bmw">BMW 320d</option>
                                <option value="mercedes">Mercedes E class</option>
                                <option value="fortuner">Fortuner</option>
                                <option value="ford">Ford</option>
                            </select>
                        </div>
                        <div className="bookACarOptions">
                            <p>Select a pickup location</p>
                            <select name="" id="" className='select-option'>
                                <option value="location">Select your pickup location</option>
                                <option value="loc1">location1</option>
                                <option value="loc2">location2</option>
                                <option value="loc3">location3</option>
                                <option value="loc4">location4</option>
                                <option value="loc5">location5</option>
                            </select>
                        </div>
                        <div className="bookACarOptions">
                            <p>Select a drop off location</p>
                            <select name="" id="" className='select-option'>
                                <option value="location">Select your drop off location</option>
                                <option value="loc1">location1</option>
                                <option value="loc2">location2</option>
                                <option value="loc3">location3</option>
                                <option value="loc4">location4</option>
                                <option value="loc5">location5</option>
                            </select>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="bookACarOptions">
                            <p>Pick Up Date</p>
                            <input className='select-option' type="date" />
                        </div>
                        <div className="bookACarOptions">
                            <p>Drop Off Date</p>
                            <input className='select-option' type="date" />
                        </div>
                        <div className="btn">
                            <a href="" className='search'>Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookACar;
