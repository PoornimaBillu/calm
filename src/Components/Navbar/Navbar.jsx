import React from 'react';
import "./Navbar.css"
import { Link, Route } from 'react-router-dom';
import stressLess from "../../Assets/stressless1.jpg";
import sleepMore from "../../Assets/sleepmore1.jpg";
import liveMindfull from "../../Assets/livemindfully.jpg"


function Navbar() {
  return (
    <>
    <div className='title'>
<ul>
    <Link to="/about"><li>About</li></Link>
    
    <Link to="/try-calm-free"><li>Try Calm for Free</li></Link>
    <Link to='/sign-up'><li>Login</li></Link>
    
    <li>Help</li>
</ul>
    </div>
    <img className="m_img" src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fjasper-lake-hero-banner.webp&w=1920&q=75" />
   
   <div className='helpfeel'>
    <h2 className='h2c2'>We're Here to help you Feel Better</h2>
    <div className='pagetwo'>
        <div>
        <img src={stressLess} className='secondpart1' />
        
        <h3 className='h3c4'>Stress Less

        </h3>
        <p className='navp'>Get in the moment relief for stress and anxiety so you can get back to living.

        </p>
        <Link className='link_more'>Learn More</Link>
    </div>
    <div>
        <img src={sleepMore} className='secondpart2' />
        
        <h3 className='h3c4'>Sleep More

        </h3>
        <p className='navp'>Fall asleep (and stay asleep) naturally and peacefully.
        </p>
        <Link className='link_more'>Learn More</Link>
    </div>
    <div>
        <img src={liveMindfull} className='secondpart3' />
        
        <h3 className='h3c4'>Live Mindfully

        </h3>
        <p className='navp'>Navigate life's ups and downs with resilience, confidence and guided support.

        </p>
        <Link className='link_more'>Learn More</Link>
    </div>
    </div>
   </div>
    </>
  )
}

export default Navbar