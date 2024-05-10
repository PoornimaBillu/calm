import React, { useState } from 'react';
import './Test.css'


function Test() {
    const[showFirstDiv, setShowFirstDiv] = useState(true);

    const [showSecondDiv, setShowSecondDiv] = useState(false);
  const handleContinueClick = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(true);
  };
  return (
    <>
    {showFirstDiv && (
        <div>
          <h4>Your plan, designed to work at your pace.</h4>
          <p>Knowing you, which pace do you prefer?</p>
          <button>As Fast As Possible</button>
          <button>Slow and Steady</button>
          <button>Some Where InBetween</button>
        </div>
      )}
     {/* <div>
        <h4>Your plan, designed to work at your pace.</h4>
        <p>Knowing you, which pace do you prefer?</p>
        <button>As Fast As Possible</button>
        <button>Slow and Steady</button>
        <button>Some Where InBetween</button>
    </div> */}
    <button onClick={handleContinueClick}>Continue</button>
    {/* Next Page Render After clicking Continue button */}
    {showSecondDiv && (
        <div>
          <h4>Let’s better understand your current state of mind.</h4>
          <p>At this moment, how motivated are you to reduce your stress?</p>
          <button>I'm Ready</button>
          <button>Feeling Hopeful</button>
          <button>I'm Cautious</button>
        </div>
      )}
    
  
    {/* <div>
        <h4>Let’s better understand your current state of mind.</h4>
        <p>At this moment, how motivated are you to reduce your stress?</p>
        <button>I'Ready</button>
        <button>Feeling Hopeful</button>
        <button>I'am cautions</button>
    </div> */}
    </>
  )
}

export default Test