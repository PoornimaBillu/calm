// // import React, { useState } from 'react';
// // import "./PieceTwo.css";

// // function PieceTwo() {
// //     const[showSelectedComponent, setShowSelectedComponent] = useState(false);
// //     const[continueComponent, setContinueComponent]= useState(false);
// //     const[nextComponent,setNextComponent] = useState(false);
// //     const[nextNextComponent, setNextNextComponent] = useState(false);
// //     const handlerShowComp=()=>{
// //         setShowSelectedComponent(true)
// //     }

// //     const handlerThree = () =>{
// //         setContinueComponent(true)

// //     }
// //     const eventHandle =()=>{
// //         setNextComponent(true)

// //     }
// //     const cntHandler = () =>{
// //         setNextNextComponent(true)

// //     }
// //   return (
// //     <>
// //     <div >
// //         <h3 className='piece_two'>How have you been feeling lately?</h3>
// //     </div>
// //     <div className='btnc11'>
// //         <button onClick={handlerShowComp}>Good</button>
// //         <button onClick={handlerShowComp}>Stressed</button>
// //         <button onClick={handlerShowComp}>Sad</button>
// //         <button onClick={handlerShowComp}>Indifferent</button>
// //     </div>
// //     <div>
// //         {
// //             showSelectedComponent && (<div className='divCon'>        <p>That's OK.</p>
// //             <p className='secondDiv'>Recognizing how you feel is an important part of mindfulness, so we’ll keep checking in with you.</p>
    
// //     </div>)
// //         }

// //     </div>
// //     <button onClick={handlerThree} className="bg-gradient-to-r from-blue-500 to-purple-600  hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Continue</button>
// //     {/* next Page after clicking the continue button */}
// //     <div>
// //         {
// //             continueComponent && (<div className='divFou'><h4 className='h4C'>What's typically the biggest source of stress for you?</h4>
// //             <button className='btns' onClick={eventHandle}>Money</button><br></br>
// //             <button className='btns' onClick={eventHandle}>Work or School</button><br></br>
// //             <button className='btns' onClick={eventHandle}>Health</button><br></br>
// //             <button className='btns' onClick={eventHandle}>Relationships</button><br></br>
// //             <button className='btns' onClick={eventHandle}>Family Responsibilities</button><br></br>
// //             <button className='btns' onClick={eventHandle}>Other</button></div>)
// //         }
        
// //     </div>
// //     {
// //         nextComponent &&(<div><button className='cntbtn' onClick={cntHandler}>Continue</button></div>)
// //     }
   
// //     {/* 3rd page */}
// //     <div>
// //         {
// //             nextNextComponent && (<div><h4 className='h4C'>How does stress usually show up for you?</h4>
// //             <p>Select all that apply</p>
// //             <button className='btns'>Anxious Thoughts</button><br></br>
// //                     <button className='btns'>Physical discomfort</button><br></br>
// //                     <button className='btns'>Moodiness</button><br></br>
// //                     <button className='btns'>Difficulty Sleeping</button></div>)
// //         }

        
// //     </div>
// //     </>
// //   )
// // }

// // export default PieceTwo

// import React, { useState } from 'react';
// import "./PieceTwo.css";

// function PieceTwo() {
//     const [showSelectedComponent, setShowSelectedComponent] = useState(false);
//     const [continueComponent, setContinueComponent] = useState(false);
//     const [nextComponent, setNextComponent] = useState(false);
//     const [nextNextComponent, setNextNextComponent] = useState(false);
//     const [selectedFeeling, setSelectedFeeling] = useState('');

//     const handlerShowComp = () => {
//         setShowSelectedComponent(true);
//     }

//     const handlerThree = () => {
//         setContinueComponent(true);
//     }

//     const eventHandle = () => {
//         setNextComponent(true);
//     }

//     const cntHandler = () => {
//         setNextNextComponent(true);
//     }

//     const handleFeelingClick = (feeling) => {
//         setSelectedFeeling(feeling);
//         handlerShowComp();
//     }

//     return (
//         <>
//             {!showSelectedComponent && (
//                 <>
//                     <div>
//                         <h3 className='piece_two'>How have you been feeling lately?</h3>
//                     </div>
//                     <div className='btnc11'>
//                         <button onClick={() => handleFeelingClick('Good')}>Good</button>
//                         <button onClick={() => handleFeelingClick('Stressed')}>Stressed</button>
//                         <button onClick={() => handleFeelingClick('Sad')}>Sad</button>
//                         <button onClick={() => handleFeelingClick('Indifferent')}>Indifferent</button>
//                     </div>
//                     {/* <button onClick={handlerThree} className="bg-gradient-to-r from-blue-500 to-purple-600  hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Continue</button> */}

//                 </>
//             )}
//             {showSelectedComponent && (
//                 <div className='divCon'>
//                     <p>That's OK.</p>
//                     <p className='secondDiv'>Recognizing how you feel is an important part of mindfulness, so we’ll keep checking in with you.</p>
//                     <button onClick={handlerThree} className="bg-gradient-to-r from-blue-500 to-purple-600  hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Continue</button>
   
//                 </div>
//             )}
//             {continueComponent && !nextComponent && (
//                 <button onClick={eventHandle} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Continue</button>
//             )}
//             {nextComponent && (
//                 <div className='divFou'>
//                     <h4 className='h4C'>What's typically the biggest source of stress for you?</h4>
//                     <button className='btns' onClick={cntHandler}>Money</button><br></br>
//                     <button className='btns' onClick={cntHandler}>Work or School</button><br></br>
//                     <button className='btns' onClick={cntHandler}>Health</button><br></br>
//                     <button className='btns' onClick={cntHandler}>Relationships</button><br></br>
//                     <button className='btns' onClick={cntHandler}>Family Responsibilities</button><br></br>
//                     <button className='btns' onClick={cntHandler}>Other</button>
//                 </div>
//             )}
//             {nextNextComponent && (
//                 <div>
//                     <h4 className='h4C'>How does stress usually show up for you?</h4>
//                     <p>Select all that apply</p>
//                     <button className='btns'>Anxious Thoughts</button><br></br>
//                     <button className='btns'>Physical discomfort</button><br></br>
//                     <button className='btns'>Moodiness</button><br></br>
//                     <button className='btns'>Difficulty Sleeping</button>
//                 </div>
//             )}
//         </>
//     )
// }

// export default PieceTwo;
import React, { useState } from 'react';
import "./PieceTwo.css";

function PieceTwo() {
    const [showSelectedComponent, setShowSelectedComponent] = useState(false);
    const [continueComponent, setContinueComponent] = useState(false);
    const [nextComponent, setNextComponent] = useState(false);
    const [nextNextComponent, setNextNextComponent] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handlerShowComp = () => {
        setShowSelectedComponent(true);
    }

    const handlerThree = () => {
        setContinueComponent(true);
    }

    const eventHandle = () => {
        setNextComponent(true);
    }

    const cntHandler = (option) => {
        setSelectedOption(option);
        setNextNextComponent(true);
    }

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
            {showSelectedComponent && (
                <div className='divCon'>
                    <p>That's OK.</p>
                
                
                    <p className='secondDiv'>Recognizing how you feel is an important part of mindfulness, so we’ll keep checking in with you.</p>
                    <button onClick={eventHandle} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Continue</button>
                </div>
            )}
            {continueComponent && !nextComponent && (
                <button onClick={eventHandle} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Continue</button>
            )}
            {nextComponent && (
                <div className='divFou'>
                    <h4 className='h4C'>What's typically the biggest source of stress for you?</h4>
                    <button className='btns' onClick={() => cntHandler('Money')}>Money</button><br></br>
                    <button className='btns' onClick={() => cntHandler('Work or School')}>Work or School</button><br></br>
                    <button className='btns' onClick={() => cntHandler('Health')}>Health</button><br></br>
                    <button className='btns' onClick={() => cntHandler('Relationships')}>Relationships</button><br></br>
                    <button className='btns' onClick={() => cntHandler('Family Responsibilities')}>Family Responsibilities</button><br></br>
                    <button className='btns' onClick={() => cntHandler('Other')}>Other</button>
                </div>
            )}
            {nextNextComponent && (
                <div>
                    <h4 className='h4C'>How does stress usually show up for you?</h4>
                    <p>Select all that apply</p>
                    <button className='btns'>Anxious Thoughts</button><br></br>
                    <button className='btns'>Physical discomfort</button><br></br>
                    <button className='btns'>Moodiness</button><br></br>
                    <button className='btns'>Difficulty Sleeping</button>
                </div>
            )}
        </>
    )
}

export default PieceTwo;
