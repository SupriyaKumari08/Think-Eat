import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import './Pickles.css'
function Pickles() {
  return (
    <div className='Picklebx'>
    <SingleCard title={'Beetroot'} id={19} />
    <SingleCard title={'Red Onion'} id={20} />
    <SingleCard title={'Red Cabbage'} id={21} />

    </div>
  )
}

export default Pickles