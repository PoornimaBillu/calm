// // import React, { useState } from 'react';
// // import SleepImage from "../../Assets/sleep.jpg";
// // import './WhatBrings.css'
// // import NextBring from '../NextBring/NextBring';

// // function WhatBrings() {
// //     const[showNextB, setShowNextB] = useState(false);
// //     const EventHandlerWel=()=>{
// //         setShowNextB(true)
// //     }
// //   return (
// //     <>
// //     <div><h3 className='c6h6'>Try Calm For Free</h3> <br></br>
// //     <h2 className='c6h8'>What Brings You to Calm</h2>
// //     </div>
// //     <p className='c6h7'>Select All that apply</p>
// //     <div className='btnsforcalm'>
// //         <div >
// //        {/* // <img src= {SleepImage} className='sleepimage'/> */}
// //         {/* <button><img src= {SleepImage} className='btn1'/>Improve Sleep Quality</button> */}
// //         </div>
// //     <button className='btn1'>Improve Sleep Quality</button>
// //     <button className='btn1'>Reduce Stress or Anxiety</button>
// //     <button className='btn1'>Improve Focus</button>
// //     <button className='btn1'>Self Improvement</button>
// //     <button className='btn1'>SomeThing Else</button><br></br>
    
    
// //     </div>
// //     <button className='btn2' onClick={EventHandlerWel}>Continue</button><br></br>
// //     { showNextB && <NextBring />}
// //     <button className='btn2'>Skip For Now</button>
// //     </>
// //   )
// // }

// // export default WhatBrings
// import React, { useState } from 'react';
// import SleepImage from "../../Assets/sleep.jpg";
// import './WhatBrings.css'
// import NextBring from '../NextBring/NextBring';
// import { Link } from 'react-router-dom';


// function WhatBrings() {
//     const [showNextB, setShowNextB] = useState(false);
//     const[selectedButton, setSelectedButton] = useState(null);
//     const handleBtnBgColor= (btnId)=>{
//         setSelectedButton(btnId === selectedButton ? null : btnId)

//     }

//     const EventHandlerWel = () => {
//         setShowNextB(true);
//     }

//     return (
//         <>
//             {!showNextB && (
//                 <div>
//                     <h3 className='c6h6'>Try Calm For Free</h3>
//                     <br></br>
//                     <h2 className='c6h8'>What Brings You to Calm</h2>
//                 </div>
//             )}
//             {!showNextB && <p className='c6h7'>Select All that apply</p>}
//             {!showNextB && (
//                 <div className='btnsforcalm'>
//                     <button className={`btn1 ${selectedButton === 1 ? 'selected' : ''}`}
//                         onClick={() => handleBtnBgColor(1)}>Improve Sleep Quality</button>
//                     <button className={`btn1 ${selectedButton === 2 ? 'selected' : ''}`}
//                         onClick={() => handleBtnBgColor(2)}>Reduce Stress or Anxiety</button>
//                     <button className={`btn1 ${selectedButton === 3 ? 'selected' : ''}`}
//                         onClick={() => handleBtnBgColor(3)}>Improve Focus</button>
//                     <button className={`btn1 ${selectedButton === 4 ? 'selected' : ''}`}
//                         onClick={() => handleBtnBgColor(4)}>Self Improvement</button>
//                     <button className={`btn1 ${selectedButton === 5 ? 'selected' : ''}`}
//                         onClick={() => handleBtnBgColor(5)}>SomeThing Else</button>
//                     <br></br>
//                 </div>
//             )}
//             {!showNextB && (
//                 <>
//                     <button className='btn2' onClick={EventHandlerWel}>Continue</button>
//                     <br></br>
//                     <button className='btn2'>Skip For Now</button>
//                 </>
//             )}
//             {showNextB && <NextBring />}

//             {/* <Link to='/login'>Login Here</Link> */}
//         </>
//     )
// }

// export default WhatBrings;

import React, { useState } from 'react';
import SleepImage from "../../Assets/sleep.jpg";
import './WhatBrings.css'
import NextBring from '../NextBring/NextBring';
import { Link } from 'react-router-dom';

function WhatBrings() {
    const [showNextB, setShowNextB] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (itemId) => {
        // Check if the item is already selected
        if (selectedItems.includes(itemId)) {
            // If selected, remove it from the selected items
            setSelectedItems(selectedItems.filter(item => item !== itemId));
        } else {
            // If not selected, check if there are less than 4 selected items
            if (selectedItems.length < 5) {
                // Add the item to the selected items
                setSelectedItems([...selectedItems, itemId]);
            } else {
                // If already 4 items selected, do nothing
                // You can also provide a message to the user indicating the limit
                console.log("You can only select up to 5 items.");
            }
        }
    }

    const EventHandlerWel = () => {
        setShowNextB(true);
    }

    return (
        <>
            {!showNextB && (
                <div>
                    <h3 className='c6h6'>Try Calm For Free</h3>
                    <br></br>
                    <h2 className='c6h8'>What Brings You to Calm</h2>
                </div>
            )}
            {!showNextB && <p className='c6h7'>Select up to 5 items</p>}
            {!showNextB && (
                <div className='btnsforcalm'>
                    <button
                        className={`btn1 ${selectedItems.includes(1) ? 'selected' : ''}`}
                        onClick={() => handleItemClick(1)}
                    >
                        Improve Sleep Quality
                    </button>
                    <button
                        className={`btn1 ${selectedItems.includes(2) ? 'selected' : ''}`}
                        onClick={() => handleItemClick(2)}
                    >
                        Reduce Stress or Anxiety
                    </button>
                    <button
                        className={`btn1 ${selectedItems.includes(3) ? 'selected' : ''}`}
                        onClick={() => handleItemClick(3)}
                    >
                        Improve Focus
                    </button>
                    <button
                        className={`btn1 ${selectedItems.includes(4) ? 'selected' : ''}`}
                        onClick={() => handleItemClick(4)}
                    >
                        Self Improvement
                    </button>
                    <button
                        className={`btn1 ${selectedItems.includes(5) ? 'selected' : ''}`}
                        onClick={() => handleItemClick(5)}
                    >
                        Something Else
                    </button>
                    <br></br>
                </div>
            )}
            {!showNextB && (
                <>
                    <button className='btn2' onClick={EventHandlerWel}>Continue</button>
                    <br></br>
                    <button className='btn2'>Skip For Now</button>
                </>
            )}
            {showNextB && <NextBring />}
            {/* <Link to='/login'>Login Here</Link> */}
        </>
    )
}

export default WhatBrings;
