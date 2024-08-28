import React, { useState } from 'react'
import reviews from '../data'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import './Cards.css'

const Cards = () => {

    const [index, setIndex] = useState(0);
    const [displayData, setDisplayData] = useState(reviews[index]);
    
    const handleLeftClick = () => {
        setIndex(index == 0 ? (reviews.length-1) : index-1);
        console.log(reviews[index].name)
        setDisplayData(reviews[index]);
        console.log(displayData.name) 
    }

    const handleRightClick = () => {
        setIndex(index==(reviews.length-1) ? 0 : index+1);
        setDisplayData(reviews[index]); 
    }

    const handleRandomClick = () => {
        setIndex(Math.floor(Math.random() * reviews.length));
        setDisplayData(reviews[index]);
    }

  return (
    <div className='container'>
        <div className='title'>
            <div className='title-title'>
                <h2>Our Testimonials</h2>
                <div className='underline'></div>
            </div>
            
        </div>
        <div className='image-div'>
            <img className='image' src={displayData.image} alt='Image Loading'/>
        </div>
        <div className='description'>
            <div className='person'>
                <h4>{displayData.name}</h4>
                <p className='job'>{displayData.job}</p>
            </div>
             <FaQuoteLeft className='quotes'/>
            <p style={{ textAlign: 'center' }}>{displayData.text}</p>
            <FaQuoteRight className='quotes'/>
            <div className='buttons'>
                <div className='arrow-div'>
                    <button onClick={handleLeftClick} className='arrow'><MdKeyboardArrowLeft /></button>
                    <button onClick={handleRightClick} className='arrow'><MdKeyboardArrowRight /></button>
                </div>
                <button onClick={handleRandomClick} className='random-button'>Surprise Me</button>
            </div>
        </div>

    </div>
  )
}

export default Cards;
