import React from 'react'
import SingleCard from '../SingleCard/SingleCard';
import './Base.css'





function Base() {

  return (



    <div className='basebx'>
    
    <SingleCard title={'Lettus'} id={1} />
    <SingleCard title={'Mixed Greens'} id={2} />
    <SingleCard title={'Kale'} id={3} />
    <SingleCard title={'Spinach'} id={4}/>


    </div>

    

  )
}

export default Base