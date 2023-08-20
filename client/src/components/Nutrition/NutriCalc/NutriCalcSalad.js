import React from 'react'
import './NutriCalcSalad.css'
import { Link, Outlet } from 'react-router-dom'
import NutriTable from '../NutriTable/NutriTable'




function NutriCalc() {

  
  return (
    <div className='NutriGrandDiv'>


    <div className='NutriDisplay'>

    <div className='nutriMenu' id='salad'>

        <h3> <Link className='NutriCalcLink active' to="base"> Base </Link></h3>


        <h3> <Link className='NutriCalcLink' to="toppings"> Toppings </Link></h3>


        <h3> <Link className='NutriCalcLink' to="pickles"> Pickles </Link></h3>


        <h3> <Link className='NutriCalcLink' to="protein"> Protien </Link></h3>


        <h3> <Link className='NutriCalcLink' to="dressings"> Dressings </Link></h3>


        <h3> <Link className='NutriCalcLink' to="finishes"> Top Things Off </Link></h3>
   


    </div>
   
         <div className="NutriDisplayTable">
            <NutriTable/>
         </div>
    </div>

<Outlet/>

    </div>
  )
}

export default NutriCalc