import React, { useState } from 'react';
import './NextABring.css'


function NextABring() {
    const[showAComponent, setShowAComponent]=useState(false);
    const [showBComponent, setShowBComponent]=useState(false)
    const eventShowAComponent=()=>{
        setShowAComponent(true)

    }
    const showBComponentHandler=()=>{
         setShowBComponent(true)
    }
  return (
    <>
    {
       ! showAComponent && (<div className='divFou'>
        <h4 className='h4C'>What's typically the biggest source of stress for you?</h4>
        <button className='btns' onClick={showBComponentHandler}>Money</button><br></br>
        <button className='btns'  onClick={showBComponentHandler}>Work or School</button><br></br>
        <button className='btns'  onClick={showBComponentHandler}>Health</button><br></br>
        <button className='btns'  onClick={showBComponentHandler}>Relationships</button><br></br>
        <button className='btns'  onClick={showBComponentHandler}>Family Responsibilities</button><br></br>
        <button className='btns'  onClick={showBComponentHandler}>Other</button>
    </div>)
    }
    <button onClick={eventShowAComponent}>Continue</button>
    {showBComponent && (
        <div>
            <div>
                    <h4 className='h4C'>How does stress usually show up for you?</h4>
                    <p>Select all that apply</p>
                    <button className='btns'>Anxious Thoughts</button><br></br>
                    <button className='btns'>Physical discomfort</button><br></br>
                    <button className='btns'>Moodiness</button><br></br>
                    <button className='btns'>Difficulty Sleeping</button>
                </div>
        </div>
    )}
    
    </>
  )
}

export default NextABring