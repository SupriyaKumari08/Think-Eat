import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import './DressingsWraps.css'
function DressingsWraps() {
  return (
    <div className='dressingsWrapsBx'>
    <SingleCard title={'Hummus'} id={97} />
<SingleCard title={'Salsa'} id={98} />
<SingleCard title={'Coleslaw'} id={99} />
<SingleCard title={'Oil & Vinegar Dressing'} id={100} />
<SingleCard title={'Tahini'} id={101} />
<SingleCard title={'Tomato Ketchup'} id={102} />
<SingleCard title={'Chili Sauce'} id={103} />
<SingleCard title={'Sweet Chili Sauce'} id={104} />
<SingleCard title={'Mayo'} id={105} />
<SingleCard title={'Hot-Sauce'} id={106} />
<SingleCard title={'Barbecue Sauce'} id={107} />

    </div>
  )
}

export default DressingsWraps