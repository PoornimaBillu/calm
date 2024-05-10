import React, { useState } from 'react';
import "./NextTBring.css"
import NextABring from '../NextABring/NextABring';
import NextUBrings from '../NextUBrings/NextUBrings';

function NextTBring() {
    const[showSelectedComponent, setShowSelectedComponent]=useState(false);
   
    const[showUComponent, setShowUComponent] = useState(false)
    const[showAComponent, setShowAComponent] = useState(false);
    const [showSecondComponent, setShowSecondComponent] = useState(false);
    const [showThirdComponent, setShowThirdComponent] = useState(false);
const[showFourthComponent, setShowFourthComponent] = useState(false);
    const eventUHandler = () => {
        setShowSecondComponent(true);
    }
    const handlerShowComp = () =>{
        setShowSelectedComponent(true)
    }
    const eventHandlerC=() =>{
        setShowAComponent(true)

    }
const eventWHandlerS=()=>{
    setShowFourthComponent(true);
}
    const eventUHandlerS = () => {
        setShowThirdComponent(true);
    }
    const showNextAComponent = () =>{
        
        setShowUComponent(true)
    }
    // const eventUHandler=()=>{
    //     // setShowUComponent(true)

    // }
  return (
    <>
    {!showSelectedComponent && (
                <>
                    <div>
                        <h3 className='piece_two'>How have you been feeling lately?</h3>
                    </div>
                    <div className='btnc11'>
                        <button onClick={handlerShowComp}>Good</button>
                        <button onClick={handlerShowComp}>Stressed</button>
                        <button onClick={handlerShowComp}>Sad</button>
                        <button onClick={handlerShowComp}>Indifferent</button>
                    </div>
                </>
            )}
            {showSelectedComponent && !showAComponent && (
                <div className='divCon'>
                    <p>That's OK.</p>
                
                
                    <p className='secondDiv'>Recognizing how you feel is an important part of mindfulness, so we’ll keep checking in with you.</p>
                    <button onClick={eventHandlerC} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Continue</button>
                </div>
            )}
            {/* {showAComponent && <NextABring />} */}
             {
        showAComponent &&  !showUComponent && (<div className='divFou'>
        <h4 className='h4C'>What's typically the biggest source of stress for you?</h4>
        <button className='btns' onClick={showNextAComponent}>Money</button><br></br>
        <button className='btns' onClick={showNextAComponent}>Work or School</button><br></br>
        <button className='btns' onClick={showNextAComponent}>Health</button><br></br>
        <button className='btns' onClick={showNextAComponent}>Relationships</button><br></br>
        <button className='btns' onClick={showNextAComponent}>Family Responsibilities</button><br></br>
        <button className='btns' onClick={showNextAComponent}>Other</button>
    </div>)
    }

    <div>
    {showSecondComponent ? (
                <NextUBrings />
             ) : 
             //(
            //     <div className='dive'>
            //         <h4 className='h4C'>How does stress usually show up for you?</h4>
            //         <p>Select all that apply</p>
            //         <button className='btns' onClick={eventUHandler}>Anxious Thoughts</button><br></br>
            //         <button className='btns' onClick={eventUHandler}>Physical discomfort</button><br></br>
            //         <button className='btns' onClick={eventUHandler}>Moodiness</button><br></br>
            //         <button className='btns' onClick={eventUHandler}>Difficulty Sleeping</button>
            //     </div>
            // )
            null
            }
    </div>
    {/* {showUComponent && (
                <div className='dive'>
                    <h4 className='h4C'>How does stress usually show up for you?</h4>
                    <p>Select all that apply</p>
                    <button className='btns' onClick={eventUHandler}>Anxious Thoughts</button><br></br>
                    <button className='btns' onClick={eventUHandler}>Physical discomfort</button><br></br>
                    <button className='btns' onClick={eventUHandler}>Moodiness</button><br></br>
                    <button className='btns' onClick={eventUHandler}>Difficulty Sleeping</button>
                </div>
            )} */}

<div>
            {showThirdComponent ? (
                <div>
                    <h4 className='h4C'>What is Your Experience with Meditation..?</h4>
                    <button className='btns' onClick={eventWHandlerS}>None.</button><br></br>
                    <button className='btns' onClick={eventWHandlerS}>I've Tried Few Times</button><br></br>
                    <button className='btns' onClick={eventWHandlerS}>I've Meditated a lot</button><br></br>
                </div>
            ) : null}
        </div>
        {
            showFourthComponent ? (<div>Great! We'll help you deepen your practice and build a lasting meditation habit.

            </div>) :<button>Continue</button>
        }

{/* {showUComponent && <NextUBrings />} */}

    </>
  )
}

export default NextTBring