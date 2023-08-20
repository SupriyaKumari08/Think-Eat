import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import './Toppings.css'


function Toppings() {

  return (

    <div className='Toppingbx'>
  <SingleCard title={'Boiled corn'} id={5} />
  <SingleCard title={'Cucumber'} id={6} />
  <SingleCard title={'Tomatoes'} id={7} />
  <SingleCard title={'Carrots'} id={8} />
  <SingleCard title={'Bell pepper'} id={9} />
  <SingleCard title={'Coriander'} id={10} />
  <SingleCard title={'Onion'} id={11} />
  <SingleCard title={'Jalapeno'} id={12} />
  <SingleCard title={'Olives'} id={13} />
  <SingleCard title={'Celery'} id={14} />
  <SingleCard title={'Mushrooms'} id={15} />
  <SingleCard title={'Potatoes'} id={16} />
  <SingleCard title={'Radish'} id={17} />
  <SingleCard title={'Beetroot'} id={18} />
  
    </div>
  )
}

export default Toppings