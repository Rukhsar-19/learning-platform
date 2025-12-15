import React from 'react';

import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'remixicon/fonts/remixicon.css'
 import "./Styles/Commonstyles.css";
import Hero from './Components/Hero';
import Header from './Components/Header';
import Companies from './Components/Companies';
import Cloud from './Components/Cloud';
import Skillline from './Components/Skillline';
import Classroom from './Components/Classroom';
import Ourfeature from './Components/Ourfeature';
import Tools from './Components/Tools';
import Quizes from './Components/Quizes';
import Management from './Components/Management';
import One from './Components/One';
import Integrations from './Components/Integrations';
import Whatswiper from './Components/Whatswiper';
import { Lastestnews } from './Components/Lastestnews';
import { Footer } from './Components/Footer';

function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <Companies/>
   <Cloud/>
   <Skillline/>
   <Classroom/>
   <Ourfeature/>
   <Tools/>
   <Quizes/>
   <Management/>
   <One/>
   <Integrations/>
   <Whatswiper/>
  <Lastestnews/>
  <Footer/>
   
   </>
  );
}

export default App;
