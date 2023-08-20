import React from 'react'
import './Home.css'
import NutriCalc from '../NutriCalc/NutriCalcSalad'
import { Outlet } from 'react-router-dom'

function Home() {
  return (


    <div className='homePage' id='nutrimain'>
        <div className="homeParent">

            <p className='NutriBannerTag NutriCalorie'>CALORIES: 284</p>
            <p className='NutriBannerTag NutriSugar'>SUGAR: 31G</p>
            <p className='NutriBannerTag NutriSodium'>SODIUM: 139G</p>
            <p className='NutriBannerTag NutriFat'>FAT: 1.8G</p>
            <div className='homeBanner'>
            <h1 className='homePageTitle' id='nutripagetitleid' >Recipe Nutrition <br className='breakNutri' /> Calculator</h1>
            <br />
            <h3 className='homePageSubtitle'>Unlock detailed nutritional information for the recipe You create.
            <br />
            <div className='nurtiHomePictureError'>
            <img className='foodNutriPage' src={require('./Food.png')} alt="" />
            </div>
            Have Power over what goes in your body</h3>

            <h2 className='navigateToCalc'> <a href="#here" className='anchorNutri' > Calculate Nutritional Value </a><span className='NavigateArrow'>{' > '}</span></h2>
        </div>

            </div>

    <img className='foodNutriPage2' src={require('./Food2.png')} alt="" />
    
    <div className='nutriHomeLastText'>
        <h4 className='NutriPageText'>Analyze nutritional and calorie information for any recipe <br /> Quickly and easily access detailed nutritional breakdowns <br /> and calculate calories in any recipe—from recipes you’ve <br /> discovered online to recipes you’ve created yourself.</h4>
    </div>
    <br /><br /><br /><br /><br /><br />

    <br id="here" />


    </div>
  )
}

export default Home