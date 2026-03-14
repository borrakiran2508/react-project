import React from 'react'
import "./App.css";
import{ BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import MobilePage from './pages/MobilePage';
import ComputerPage from './pages/ComputerPage';
import MenPage from './pages/MenPage';
import KidPage from './pages/KidPage';
import UserCart from './UserCart';
import ShopPage from './pages/ShopPage';





function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/> 
        <Route path='/computers' element={<ComputerPage/>}/>
        <Route path='/mens' element={<MenPage/>} />
        <Route path='/kids' element={<KidPage/>}/>

          
          <Route path='/cart' element={<UserCart/>}/>

          <Route path='/shop' element={<ShopPage/>}/>        
      </Routes>
      
    </BrowserRouter>
   
      
    
    
      
  
  )
}

export default App
