import React from 'react';
import Fb from '../../Assets/fb.png';
import Ap from '../../Assets/apple.png';
import Goo from '../../Assets/google.jpg';
import Linkedin from '../../Assets/linkedin.png';
import './SkipForNow.css'
import { Link } from 'react-router-dom';

function SkipForNow() {
  return (
    <>
    <div>
        <h4>Create a free account to save your preferences</h4>
        <input type='text' placeholder='First name'></input><br></br><br></br>
        <input type='text' placeholder='Email address'></input><br></br><br></br>
        <input type='text' placeholder='Password (8+characters)'></input><br></br><br></br>
        <hr></hr>
        <div className='skip11'>
        <img src={Fb} alt='FaceBook' className='Imga11'/>
        <button className='btns11'><a href='https://facebook.com/' target='_target'>Continue With FaceBook</a></button>
        </div><br></br>
        <div className='skip11'>
        <img src={Ap} alt='FaceBook' className='Imga11'/>
        <button className='btns11'><a href='https://mail.google.com/mail/' target='_target'>Continue With Apple</a></button>
        </div><br></br>
        <div className='skip11'>
        <img src={Goo} alt='FaceBook' className='Imga11'/>
        <button className='btns11'><a href='https://mail.google.com/mail/' target='_target'>Continue With Google</a></button>
        </div><br></br>
        <div className='skip11'>
        <img src={Linkedin} alt='FaceBook' className='Imga11'/>
        <button className='btns11'><a href="https://in.linkedin.com/" target='_blank'>Continue With LinkedIn</a></button>
        </div>
        {/* <button className='btns11'>
    <a href="https://in.linkedin.com/" target='_blank'>Continue With LinkedIn</a>
</button> */}
    </div>
    </>
  )
}

export default SkipForNow