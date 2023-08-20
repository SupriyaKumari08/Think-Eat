import React from 'react'
import './Dressing.css'
import SingleCard from '../SingleCard/SingleCard'

function Dressing() {
  return (
    <div className="dressingBx">
    <SingleCard title={'Lemon Balsamic Vinegar'} id={37} />
<SingleCard title={'Cilantro Lime'} id={38} />
<SingleCard title={'Lemon Yogurt'} id={39} />
<SingleCard title={'Vinaigrette'} id={40} />
<SingleCard title={'Olive Oil Lemon'} id={41} />
<SingleCard title={'Honey Mustard'} id={42} />
<SingleCard title={'Basil Walmut'} id={43} />
<SingleCard title={'French Dressing'} id={44} />
<SingleCard title={'Mayo'} id={45} />
<SingleCard title={'Cheese'} id={46} />

    </div>
  )
}

export default Dressing