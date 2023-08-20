import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route, Outlet,} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipe/Recipe';
import NutriHome from './components/Nutrition/NutriHome/Home';
import About from './components/About/About';
import Sign from './components/LoginSignup/Signup';
import Log from './components/LoginSignup/Login';
import Base from './components/Nutrition/Base/Base'
import Finishes from './components/Nutrition/Finishes/Finishes'
import Protien from './components/Nutrition/Protien/Protien'
import Toppings from './components/Nutrition/Toppings/Toppings'
import Dressing from './components/Nutrition/Dressing/Dressing';
import NutriCalc from './components/Nutrition/NutriCalc/NutriCalcSalad';
import Pickles from './components/Nutrition/Pickles/Pickles';
// import Shell from './components/Nutrition/Shell/Shell';
// import ToppingWraps from './components/Nutrition/ToppingWraps/ToppingWraps';
// import DressingsWraps from './components/Nutrition/DressingsWraps/DressingsWraps';

function App() {
  return (

    
    <BrowserRouter>
    <Navbar/>


    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='recipes' element={<Recipes/>} />
    <Route path='about' element={<About/>} />
    <Route path='signup' element={<Sign/>} />
    <Route path='login' element={<Log/>} />
    {/* <Route path='nutricalc' element={<Nutrihome/>}/> */}

    <Route path="/nutricalc" element={(
            <>
            <NutriHome/>
            <NutriCalc/>
            </>
          )}>

    <Route path='base' element={<Base/>} />
    <Route path='toppings' element={<Toppings/>} />
    <Route path='dressings' element={<Dressing/>} />
    <Route path='protein' element={<Protien/>} />
    <Route path='finishes' element={<Finishes/>} />
    <Route path='pickles' element={<Pickles/>} />
    </Route>
    {/* <Route path='/shell' element={<Shell/>} />
    <Route path='/fillings' element={<ToppingWraps/>} />
    <Route path='/dressingsWraps' element={<DressingsWraps/>} /> */}

    </Routes>
  </BrowserRouter>

)
}

export default App;
