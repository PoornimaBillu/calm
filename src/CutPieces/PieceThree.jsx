import React from 'react'
import { Link } from 'react-router-dom'

function PieceThree() {
  return (
    <>
    <div>
    
        <p>Calm has had an incredible impact on my mental health and overall quality of life. It has changed my perspectives and state of mind.</p>
    <span>Cassandra J.</span>
    <button>Continue</button>
    </div>
    <div>
        <h4>
        What's your experience with meditation?
        </h4>
        <button>None</button>
        <button>I have Tried it a few times</button>
        <button>I've Meditated Alot</button>

    </div>
    <button>Continue</button>
    <div>
        <span>Congrats on taking your first step to a happier and healthier you.

We'll make it easy for you to learn the basics of meditation.</span>
<button>Continue</button>
    </div>
    <div>
        <h4>Your plan, designed to work at your pace.</h4>
        <p>Knowing you, which pace do you prefer?</p>
        <button>As Fast As Possible</button>
        <button>Slow and Steady</button>
        <button>Some Where InBetween</button>
    </div>
    <button>Continue</button>
    {/* Next Page Render After clicking Continue button */}
    <div>
        <h4>Let’s better understand your current state of mind.</h4>
        <p>At this moment, how motivated are you to reduce your stress?</p>
        <button>I'Ready</button>
        <button>Feeling Hopeful</button>
        <button>I'am cautions</button>
    </div>
    <button>here </button><Link to="/sign-up">Sign Up</Link>
    </>
  )
}

export default PieceThree