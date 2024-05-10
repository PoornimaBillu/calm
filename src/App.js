import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import TryCalmForFree from './Pages/TryCalmForFree/TryCalmForFree';
import MainTwo from './Components/MainTwo/MainTwo';
import MainThree from './Components/MainThree/MainThree';
import Footer from './Components/Footer/Footer';
import WhatBrings from './Pages/PageTwo/WhatBrings';
import NextBring from './Pages/NextBring/NextBring';
import Eg from './Pages/NextBring/Eg';
import SleepPage from './Pages/SleepPage/SleepPage';
import CalmHealth from './Pages/CalmHealth/CalmHealth';
import Buttons from './Components/StylesMui/Buttons';
import Test from './Pages/Test/Test';
import BigHome from './Components/BigHome/BigHome';
import SkipForNow from './Components/SkipforNow/SkipForNow';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUp from './Pages/SignUp/SignUp'
import SkipN from './Components/SkipFn/SkipN';
import TestingTwo from './Pages/Testing/TestingTwo';

function App() {
  return (
    <div className="App">
      <h2 className='m2h2'>Calm your mind. Change your life.</h2> <br></br>
     <p className='m1p1'> Mental health is hard. Getting support doesn't need to be. Our app puts the tools to feel better in your back pocket, with personalized content to manage stress and anxiety, get better sleep, and feel more present in your life. Relax your mind, and wake up as the person you want to be.</p><br></br><br></br>
      
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<BigHome />}></Route>
      <Route path="/try-calm-free" element={<WhatBrings />}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
      </BrowserRouter>
      
      
      
      <NextBring />
      {/* <Eg />
      <SleepPage />
      <Footer />
      <CalmHealth />
      <Test />
      <SkipForNow />
      <LoginPage /> */}
      {/* <SkipN /> */}
      {/* <Buttons /> */}
      {/*<button className="bg-gradient-to-r from-blue-500 to-purple-600  hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring focus:ring bg-purple-200 active:bg-blue-200 px-4 py-2 h-12 w-40 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center">Click Me</button>*/}
   
   {/* <TestingTwo /> */}
    </div>
  );
}

export default App;
