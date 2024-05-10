// import React, { useState } from 'react';

// function TestingTwo() {
//     const [activeDiv, setActiveDiv] = useState(1);

//     const handleButtonClick = (divNumber) => {
//         setActiveDiv(divNumber);
//     };

//     return (
//         <>
//             <div style={{ display: activeDiv === 1 ? 'block' : 'none' }}>
//                 <h4>What brings you to Calm?</h4>
//                 <button onClick={() => handleButtonClick(2)}>Improve Sleep Quality</button>
//                 <button onClick={() => handleButtonClick(2)}>Reduce Stress or Anxiety</button>
//                 <button onClick={() => handleButtonClick(2)}>Improves Focus</button>
//                 <button onClick={() => handleButtonClick(2)}>Self Improvement</button>
//                 <button onClick={() => handleButtonClick(2)}>Something Else</button>
//                 {/* Add similar buttons for other options */}
//             </div>

//             <div style={{ display: activeDiv === 2 ? 'block' : 'none' }}>
//                 <h4>How have you been feeling lately?</h4>
//                 <button onClick={() => handleButtonClick(3)}>Good</button>
//                 <button onClick={() => handleButtonClick(3)}>Stressed</button>
//                 <button onClick={() => handleButtonClick(3)}>Sad</button>
//                 <button onClick={() => handleButtonClick(3)}>Indifferent</button>
               
//                 {/* Add similar buttons for other options */}
//             </div>

//             <div style={{ display: activeDiv === 3 ? 'block' : 'none' }}>
//                 <h4>What's typically the biggest source of stress for you?</h4>
//                 <button onClick={() => handleButtonClick(4)}>Money</button>
//                 <button onClick={() => handleButtonClick(4)}>Work or School</button>
//                 <button onClick={() => handleButtonClick(4)}>Health</button>
//                 <button onClick={() => handleButtonClick(4)}>Relationships</button>
//                 <button onClick={() => handleButtonClick(4)}>Family Responsibilities</button>
//                 {/* Add similar buttons for other options */}
//             </div>

//             <div style={{ display: activeDiv === 4 ? 'block' : 'none' }}>
//                 <h4>How does stress usually show up for you?</h4>
//                 <button onClick={() => handleButtonClick(5)}>Anxious Thoughts</button>
//                 <button onClick={() => handleButtonClick(5)}>Physical Discomfort</button>
//                 <button onClick={() => handleButtonClick(5)}>Moodiness</button>
//                 <button onClick={() => handleButtonClick(5)}>Difficulty Sleeping</button>
//                 {/* Add buttons and handleButtonClick for this div */}
//             </div>
            
//             <div style={{ display: activeDiv === 5 ? 'block' : 'none' }}>
//                 <p>Calm has had an incredible impact on my mental health and overall quality of life. It has changed my perspectives and state of mind.</p>
               
//                 <button onClick={() => handleButtonClick(6)}>Continue</button>
//                 {/* Add buttons and handleButtonClick for this div */}
//             </div>

//             <div style={{ display: activeDiv === 6 ? 'block' : 'none' }}>
//                 <h4>What's your experience with meditation?</h4>
//                 <button onClick={() => handleButtonClick(7)}>None</button>
//                 <button onClick={() => handleButtonClick(7)}>I've tried Few Times</button>
//                 <button onClick={() => handleButtonClick(7)}>I've meditated alot</button>
               
//                 {/* Add similar buttons for other options */}
//             </div>
//             <div style={{ display: activeDiv === 7 ? 'block' : 'none' }}>
//                 <h4>Your plan, designed to work at your pace.</h4>
//                 <button onClick={() => handleButtonClick(8)}>AS fast as possible</button>
//                 <button onClick={() => handleButtonClick(8)}>Slow and Steady</button>
//                 <button onClick={() => handleButtonClick(8)}>Some where in between</button>
               
//                 {/* Add similar buttons for other options */}
//             </div>
//             <div style={{ display: activeDiv === 8 ? 'block' : 'none' }}>
//                 <h4>Let’s better understand your current state of mind.</h4>
//                 <button onClick={() => handleButtonClick(9)}>I 'm Ready</button>
//                 <button onClick={() => handleButtonClick(9)}>feeling hopefull</button>
//                 <button onClick={() => handleButtonClick(9)}>I am Cautions</button>
               
//                 {/* Add similar buttons for other options */}
//             </div>

//             <div style={{ display: activeDiv === 9 ? 'block' : 'none' }}>
//                 <h4>When would you like to meditate?</h4>
//                 <button onClick={() => handleButtonClick(10)}>Morning</button>
//                 <button onClick={() => handleButtonClick(10)}>AfterNoon</button>
//                 <button onClick={() => handleButtonClick(10)}>Night</button>
               
//                 {/* Add similar buttons for other options */}
//             </div>
//             <div style={{ display: activeDiv === 10 ? 'block' : 'none' }}>
//                 <p>By committing to a mere 10 minutes of meditation a day, I have observed a significant change to the way my brain works and handles day-to-day tasks and situations.

// Mark J.</p>
// <button onClick={() => handleButtonClick(11)}>Continue</button>
//             </div>
//             <div style={{ display: activeDiv === 11 ? 'block' : 'none' }}>
//                 <h4>Login here</h4>
//             </div>

//         </>
//     );
// }

// export default TestingTwo;
import React, { useState } from 'react';

function Testing() {
    const [activeDiv, setActiveDiv] = useState(1);

    const handleButtonClick = (divNumber) => {
        setActiveDiv(divNumber);
    };

    return (
        <>
            {activeDiv === 1 && (
                <div>
                    <h4>What brings you to Calm?</h4>
                    <button onClick={() => handleButtonClick(2)}>Improve Sleep Quality</button>
                    <button onClick={() => handleButtonClick(2)}>Improve Sleep Quality</button>
                <button onClick={() => handleButtonClick(2)}>Reduce Stress or Anxiety</button>
                <button onClick={() => handleButtonClick(2)}>Improves Focus</button>
                <button onClick={() => handleButtonClick(2)}>Self Improvement</button>
                 <button onClick={() => handleButtonClick(2)}>Something Else</button>
                </div>
            )}

            {activeDiv === 2 && (
                <div>
                    <h4>What brings you to Calm?2</h4>
                    <button onClick={() => handleButtonClick(3)}>Improve Sleep Quality</button>
                    <button onClick={() => handleButtonClick(3)}>Good</button>
                 <button onClick={() => handleButtonClick(3)}>Stressed</button>
                 <button onClick={() => handleButtonClick(3)}>Sad</button>
                 <button onClick={() => handleButtonClick(3)}>Indifferent</button>
                </div>
            )}

            {activeDiv === 3 && (
                <div>
                    <h4>What brings you to Calm?3</h4>
                    <button onClick={() => handleButtonClick(4)}>Improve Sleep Quality</button>
                    <button onClick={() => handleButtonClick(4)}>Money</button>
                <button onClick={() => handleButtonClick(4)}>Work or School</button>
                 <button onClick={() => handleButtonClick(4)}>Health</button>
                 <button onClick={() => handleButtonClick(4)}>Relationships</button>
                <button onClick={() => handleButtonClick(4)}>Family Responsibilities</button>
                </div>
            )}

            {activeDiv === 4 && (
                <div>
                    <h4>What brings you to Calm?4</h4>
                    <button onClick={() => handleButtonClick(5)}>Anxious Thoughts</button>
                <button onClick={() => handleButtonClick(5)}>Physical Discomfort</button>
                 <button onClick={() => handleButtonClick(5)}>Moodiness</button>
                 <button onClick={() => handleButtonClick(5)}>Difficulty Sleeping</button>
                </div>
            )}
            {activeDiv === 5 && (
                <div>
                    <h4>What brings you to Calm?4</h4>
                    <button onClick={() => handleButtonClick(5)}>Anxious Thoughts</button>
                <button onClick={() => handleButtonClick(5)}>Physical Discomfort</button>
                 <button onClick={() => handleButtonClick(5)}>Moodiness</button>
                 <button onClick={() => handleButtonClick(5)}>Difficulty Sleeping</button>
                </div>
            )}
        </>
    );
}

export default Testing;

