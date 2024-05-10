import React from 'react';
import "./MainTwo.css";

import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import MainThree from '../MainThree/MainThree';

function MainTwo() {
    const [showComponent, setShowComponent] = useState(false);

    const showHandler =()=>{
        setShowComponent(true)
    }
  return (
    <>
    <div className='main_two'>
        <h2 className='m2h2'>Over 2million 5Star Reviews</h2>
    </div>
    <div className='customer_reviews main_two'>
        <div className='review_box'>
            <p>When I cannot fall asleep, I turn on this app and am out within 5 minutes.</p>
<span className='spanc5'>Brandy from Houston</span>
        </div>
        <div className='review_box'>
            <p>I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.</p>
            <span className='spanc5'>John from Chicago</span>
        </div>
        <div className='review_box'>
        <p>Calm has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself..</p>
            <span className='spanc5'>Allison from San Jose</span>
        </div>
        <div className='review_box'>
        <p>My family loves Calm! Out of the three meditation apps I have on my phone, Calm is the one I actually use..</p>
            <span className='spanc5'>Kristie from Irvine</span>
        </div>
        <div className='review_box'>
            <p>Whenever I need to unwind from a stressful work day I meditate with Calm's soundscapes and it automatically sends me to my happy place.

            </p>
            <span className='spanc5'>Jasmine from Bend</span>
            
            </div>
    </div><br></br>
    <button onClick={showHandler} className='c5b5'>Load More</button>
    {
        showComponent && <MainThree />
    }
    </>
  )
}

export default MainTwo