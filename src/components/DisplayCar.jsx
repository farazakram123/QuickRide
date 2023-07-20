import React, { useState } from 'react'
import '../styles/DisplayCar.css'

export default function DisplayCar() {
    const changeColor = (id) => {
        const l = ['audi', 'bmw', 'mercedes','toyota','volvo','vw'];
        for(let i=0; i<l.length; i++){
            if(l[i]=== id){
                document.getElementById(id).style.backgroundColor = "#ff4d30";
                setImage(`../../public/images/${id}.jpg`)
            } else{
                document.getElementById(l[i]).style.backgroundColor = "#ede7e7";
            }
        }
    }

    const [Image, setImage] = useState("../../public/images/audi.jpg");

    return (
        <>
            <div className="outer-container">
                <div className="leftBox">
                    <div className="leftSubBox">
                        <button id='audi' onClick={()=> changeColor('audi')} className="carNames">Audi Q7</button>
                        <button id='bmw' onClick={()=> changeColor('bmw')} className="carNames">BMW 320d</button>
                        <button id='mercedes' onClick={()=> changeColor('mercedes')} className="carNames">Mercedes E class</button>
                        <button id='toyota' onClick={()=> changeColor('toyota')} className="carNames">Fortuner Legender</button>
                        <button id='volvo' onClick={()=> changeColor('volvo')} className="carNames">Mercedes CLS 63</button>
                        <button id='vw' onClick={()=> changeColor('vw')} className="carNames">BMW Z4</button>
                    </div>
                </div>
                <div className="midBox">
                    <img src={Image} alt="Audi" />
                </div>
                <div className="rightBox">
                    <div className="rightSubBox">
                        <div className="display-rent">
                            Rs 1000 / Day
                        </div>
                        <div className="model-details">
                            <div className="inner-model-details">
                                <p>Model</p>
                                <p>Audi</p>
                            </div>
                            <div className="inner-model-details">
                                <p>Mark</p>
                                <p>A1</p>
                            </div>
                            <div className="inner-model-details">
                                <p>Year</p>
                                <p>2020</p>
                            </div>
                            <div className="inner-model-details">
                                <p>Transmission</p>
                                <p>Auto</p>
                            </div>
                            <div className="inner-model-details">
                                <p>AC</p>
                                <p>Yes</p>
                            </div>
                            <div className="inner-model-details">
                                <p>Fuel</p>
                                <p>Petrol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
