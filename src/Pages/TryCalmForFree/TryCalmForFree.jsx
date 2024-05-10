import React from 'react';
import "./TryCalmForFree.css";
import SleepImage from "../../Assets/sleep.jpg"
function TryCalmForFree() {
  return (
    <>
    <div>TryCalmForFree</div>
    <h2>What Brings You to Calm</h2>
    <p>Select All that apply</p>
    <div className='btnsforcalm'>
        <div className='sleepbtn'>
       {/* // <img src= {SleepImage} className='sleepimage'/> */}
        <button><img src= {SleepImage} className='sleepimage'/>Improve Sleep Quality</button>
        </div>
    
    <button>Reduce Stress or Anxiety</button>
    <button>Improve Focus</button>
    <button>Self Improvement</button>
    <button>SomeThing Else</button>
    <button>Continue</button>
    <button>Skip For Now</button>
    
    </div>
    </>
  )
}

export default TryCalmForFree