import './App.css';
import React from 'react';
import Bannerone from './Component/Bannerone';
import Bannertwo from './Component/Bannertwo';
import Herobanner from './Component/Herobanner';
import Navbar from './Component/Navbar';
import Topbar from './Component/Topbar';
import Bannerthree from './Component/Bannerthree'
import Bannerfour from './Component/Bannerfour';
import Bannerfive from './Component/Bannerfive';
import Bannersix from './Component/Bannersix';
import Bannerseven from './Component/Bannerseven';
import Bannereight from './Component/Bannereight';
import Bannernine from './Component/Bannernine';
import Bannerten from './Component/Bannerten';
import Bottombar from './Component/Bottombar';
import Home from './Component/Home'
import About from './Component/About'
import Service from './Component/Service'
import Technology from './Component/Technology';
import Contact from './Component/Contact';
import Quote from './Component/Quote';
import More from './Component/More';
import { BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Topbar/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={Home}/>
      <Route path="/about" element={About}/>
      <Route path="/service" element={Service}/>
      <Route path="/technology" element={Technology}/>
      <Route path="/contact" element={Contact}/>
      <Route path="/get a quote" element={Quote}/>
      <Route path="/more" element={More}/>
     </Routes>
     </BrowserRouter>
     <Navbar/>
     <Herobanner/>
     <Bannerone/>
     <Bannertwo/>
      <Bannerthree/> 
      <Bannerfour/> 
      <Bannerfive/>
      <Bannersix/>
      <Bannerseven/>
      <Bannereight/>
      <Bannernine/>
      <Bannerten/>
      <Bottombar/>
    </div>
  );
}

export default App;
