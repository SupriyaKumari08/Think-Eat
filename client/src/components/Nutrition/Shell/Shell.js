import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import './Shell.css'
function Shell() {
  return (
    <div className='shellBx'>
    <SingleCard title={'Pita Bread'} id={78} />
    <SingleCard title={'Whole Wheat'} id={79} />
    <SingleCard title={'Buckwheat wrap'} id={80} />
    <SingleCard title={'Corn Taco Shell'} id={81} />
    <SingleCard title={'Spring Roll Sheet'} id={82} />

    </div>
  )
}

export default Shell