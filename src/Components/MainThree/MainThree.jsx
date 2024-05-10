import React from 'react';
import Stress from "../../Assets/stress3.jpg";
import Anxiety from "../../Assets/img-3.5.jpg";
import ImageThree from "../../Assets/img-3.6.jpg";
import ImageFour from "../../Assets/img-3-13.jpg";
import ImageFive from "../../Assets/img-3-12.jpg";
import ImageSix from "../../Assets/img-3-11.jpg";
import ImageSeven from "../../Assets/img-3.8.jpg"


import "./MainThree.css"
import { Link } from 'react-router-dom';

function MainThree() {
  return (
    <>
    <div className='mainthree'>
        <div  className="card">
            <img src={Stress} alt="Stress & Anxiety" />

            <p>Stress & Anxiety</p>
            <h3>What is toxic stress? Signs, symptoms & how to treat it</h3>
        </div>
        <div  className="card">
            <img src={Anxiety} alt="Anxiety" />

            <p>Workplace Wellness</p>
            <h3>What is mindful leadership? 10 ways to lead with mindfulness</h3>
        </div>
        <div className="card">
            <img src={ImageThree} alt="Stress & Anxiety" />

            <p>Mental Health</p>
            <h3>How to deal with uncertainty: 8 ways to cope in uncertain times</h3>
        </div>
        <div className="card">
            <img src={ImageFour} alt="Stress & Anxiety" />

            <p>mental Health & Positive Thinking</p>
            <h3>How to be more positive? Try these 10 positive mindset tips</h3>
        </div>
        <div className="card">
            <img src={ImageFive} alt="Stress & Anxiety" />

            <p>Stress & Anxiety</p>
            <h3>10 daily journal prompts to boost your mental health</h3>
        </div>
        <div className="card">
            <img src={ImageSix} alt="Stress & Anxiety" />

            <p>Meditation & Mindfullness</p>
            <h3>One-minute meditation: benefits and how to do a quick practice</h3>
        </div>
        <div className="card">
            <img src={ImageSeven} alt="Stress & Anxiety" />

            <p>Mental Health</p>
            <h3>How to be more resilient: 8 ways to build your resilience</h3>
        </div>
        


    </div>
    <Link to='/try-calm-free' className='l6c6'>Continue</Link>
    </>
  )
}

export default MainThree