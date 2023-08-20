import React from 'react'
import './Finishes.css'
import SingleCard from '../SingleCard/SingleCard'
function Finishes() {
  return (
    <>
    <h3 className='finishesH3'> Spices & Herbs</h3>
    <div className='finishesBx'>
          <SingleCard title={'Black Pepper'} id={47} />
          <SingleCard title={'Rock Salt'} id={48} />
          <SingleCard title={'Dried Herbs'} id={49} />
          <SingleCard title={'Chili Powder'} id={50} />
          <SingleCard title={'Onion Powder'} id={51} />
          <SingleCard title={'Garlic Powder'} id={52} />
          <SingleCard title={'Cilantro'} id={53} />
          <SingleCard title={'Sesame Seed'} id={54} />
          <SingleCard title={'Parsley'} id={55} />
    </div>

{/* -------------------------------------------------- */}

    <h3 className='finishesH3'> Sauce/ Salsa</h3>
    <div className='finishesBx'>
      <SingleCard title={'Guacamole'} id={56} />
      <SingleCard title={'Fresh Tomato Salsa'} id={57} />
      <SingleCard title={'Roasted Chilli Conrn Salsa'} id={58} />
      <SingleCard title={'Fresh Lemon'} id={59} />
      <SingleCard title={'Hot Sauce'} id={60} />
      <SingleCard title={'Sriracha'} id={61} />
      <SingleCard title={'Pesto'} id={62} />
      <SingleCard title={'Sweet Chilli Sauce'} id={63} />
    </div>

{/* -------------------------------------------------- */}

    <h3 className='finishesH3'> Crunches & Add-Ons</h3>
    <div className='finishesBx'>
    <SingleCard title={'Almonds'} id={70} />
    <SingleCard title={'Cashews'} id={71} />
    <SingleCard title={'Garlic Croutons'} id={72} />
    <SingleCard title={'Onion Flakes'} id={73} />
    <SingleCard title={'Sunflower seeds'} id={74} />
    <SingleCard title={'Tortilla Chips'} id={75} />
    <SingleCard title={'Avocado'} id={76} />
    <SingleCard title={'Hard Boiled egg'} id={77} />

    </div>

{/* -------------------------------------------------- */}

    <h3 className='finishesH3'> Dairy</h3>
    <div className='finishesBx'>
    <SingleCard title={"Sour Cream"} id={64} />
    <SingleCard title={'Feta'} id={65} />
    <SingleCard title={'Mozzarella'} id={66} />
    <SingleCard title={'Parmesan (grated)'} id={67} />
    <SingleCard title={'White Cheddar'} id={68} />
    <SingleCard title={'Moya'} id={69} />
    </div>


    </>
  )
}

export default Finishes