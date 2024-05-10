import React, { useState } from 'react'

function NextUBrings() {
    const[showUComponent, setShowUComponent]=useState(false);
    const eventUHandlerS=()=>{
        setShowUComponent(true)

    }
  return (
    <>
    { setShowUComponent && (
    <div>
         <h4 className='h4C'>What is Your Experience with Meditataion..?</h4>
                    
                    <button className='btns' onClick={eventUHandlerS}>None.</button><br></br>
                    <button className='btns' onClick={eventUHandlerS}>I'Ve Tried Few Times</button><br></br>
                    <button className='btns' onClick={eventUHandlerS}>I've Mediated alot</button><br></br>
                    </div>)
}
    </>
  )
}

export default NextUBrings