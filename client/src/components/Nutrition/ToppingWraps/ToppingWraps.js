import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import './ToppingWraps.css'
function ToppingWraps() {
  return (
    <>


    <h3 className='toppingsH3'> Veg</h3>
    <div className="toppingsWrapsBx">

    <SingleCard title={'Stir Fry Veggies'} id={87} />
    <SingleCard title={'Grilled Tofu'} id={88} />
    <SingleCard title={'Grilled Paneer'} id={89} />
    <SingleCard title={'Baked Beans'} id={90} />

    </div>
    <h3 className='toppingsH3'>Non-Veg</h3>
    <div className="toppingsWrapsBx">

    <SingleCard title={'Grilled/Shredded Chicken'} id={91} />
    <SingleCard title={'Tikka Chicken'} id={92} />
    <SingleCard title={'Egg Omlette'} id={93} />
    <SingleCard title={'Chopped Eggs'} id={94} />
    <SingleCard title={'Grilled Fish'} id={95} />
    <SingleCard title={'Minced meat'} id={96} />


    </div>



    
    </>
  )
}

export default ToppingWraps