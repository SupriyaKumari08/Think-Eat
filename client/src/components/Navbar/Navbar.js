import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {

  return (

    <div className='navbar'>
        <ul className='list' id='list'>
            <img className='logo' src={require('./logo.png')} alt="" />
            <li><Link className='linkTag' to="/"> Home</Link></li>
            <li><Link className='linkTag' to="/recipes"> Recipes</Link></li>
            <li><Link className='linkTag' to="/nutricalc"> Nutrition Calculator</Link></li>
            <li><Link className='linkTag' to="/about"> About Us</Link></li>
            <li id='login'><Link className='login linkTag' to="/signup"> Login/Signup</Link></li>
         </ul>
         <hr />
    </div>


  )
  
}

export default Navbar