import React from 'react';
import "./CalmHealth.css";
import imgOne from "../../Assets/page2.png";
import imgTwo from "../../Assets/image3page.png";
import imgThree from "../../Assets/image3.png";
import ImgFour from "../../Assets/fourimg.png";
import ImgFive from "../../Assets/fiveimg.png";
import ImgSix from "../../Assets/siximg.png";

const CalmHealth = () => {
  return (
    <>
    <div>
        <h3>Because mind and body are connected</h3>
        <p>Calm Health offers evidence-based mental health programs and tools focused on anxiety and depression that are designed to support payers, plan sponsors, and providers.</p>
    <button>Request Information</button>
    </div>
    <div>
<h4>Introducing Calm Health</h4>
<p>Taking good care of your mental health has never been more important. Here’s a quick video about how Calm Health can help.</p>
<img src={imgOne} alt='ImageOne' className='calm_health' />
    </div>
    <div>
        <h4>Easily screen your populations for anxiety and depression</h4>
        <p>In a historic move acknowledging the nation's mental health crisis, the U.S. Preventive Services Task Force issued draft recommendations that adults under 65 be screened for anxiety.

Our dynamic assessment allows members to self-screen for anxiety and depression using validated GAD-7 and PHQ-9 question sets, with consumer-friendly results and recommended paths forward.</p>
<img src={imgTwo} alt='ImageTwo' className='calm_health'/>
    </div>
    <div>
        <h4>Improve mental and physical health outcomes by providing access to enjoyable, evidence-based mental health content</h4>
        <p>Our mental health programs are written by licensed clinicians and narrated by the voices of Calm.

The programs adhere to the principles of cognitive behavioral therapy, acceptance & commitment therapy, and dialectical behavioral therapy.</p>
    </div>
    <div>
        <h4>Direct members to the right level of care</h4>
        <p>Our assessments may recommend Calm Health programs and/or refer your members to your provider network, specialty care, or other solutions based on acuity levels and pre-existing conditions.</p>
        <img src={imgThree} alt='ImageThree' className='calm_health' />
    </div>
    <div>
        <h4>Enhance care plan adherence</h4>

        <p>Target concerns and encourage members to set goals and easily share information with providers. Make it easier for members to stay on track.</p>
        <img src={ImgFour} alt='ImageFour' className='calm_health' />
    </div>
    <div>
        <h4>Leverage active and passive monitoring for proactive outreach and engagement</h4>
        <p>Our ability to capture user data from active sources like user check-ins and passive data capture from device integration allows us to proactively identify mental health concerns and suggest relevant options for care.</p>
        <img src={ImgFive} alt='ImageFive' className='calm_health' />
    </div>
    <div>
        <h2>Want to Learn More..?</h2>
        <button>Request Information</button>
    </div>
    </>
    
  )
}

export default CalmHealth