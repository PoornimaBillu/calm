import React, { useState } from 'react';
import "./NextBring.css"
import NextTBring from '../NetxTBring/NextTBring';


function NextBring() {
  const[showQuestions, setShowQuestions] = useState(false);
  const [showNextNextB, setShowNextNextB] = useState(false);
    const [selectedItItems, setSelectedItems] = useState([]);

  const continueHandler = () =>{
    setShowQuestions(true)
  }
  return (
    <>
    <div>
      <div>
        <h3 className='c9h1'>Welcome to Calm.....!</h3>
        <p className='pppp'><span className='c9h2'>Congratulations...</span> on Taking the first step towards a <span>mentally Stronger</span> you. </p>

        <p className='c9h3'>Lets get started! Just a Few Questions to <span>Personalize</span> your experince.</p>
        </div>
        <div>
            <p className='c10p10'>Did You Know.?</p>
            <p className='p10'><span className='sp10'>84%</span> of Calm users who used the app 5x a week saw an improvement in their mental health.</p>
        </div>
        <button className='btnnextbring' onClick={continueHandler}>Continue</button>&nbsp;&nbsp;
        <button className='btnnextbring'>Skip for Now</button>
        </div>
        { showQuestions && <NextTBring />}
        </>
  )
}

export default NextBring