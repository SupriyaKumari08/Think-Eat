import React from 'react'
import SingleCard from '../SingleCard/SingleCard';
import './Protien.css'

function Protien() {
  return (
    <>

<h3 className='proteinH3'> Veg</h3>
    
    <div className='Proteinbx'>   

<SingleCard title={'Paneer'} id={22} />
<SingleCard title={'Tofu(Firm)'} id={23} />
<SingleCard title={'Chickpeas'} id={24} />
<SingleCard title={'Peas'} id={25} />
<SingleCard title={'Black Beans'} id={26} />
<SingleCard title={'Quinoa'} id={27} />
<SingleCard title={'Baked Sweet Potato'} id={28} />
<SingleCard title={'Cooked Lentils'} id={29} />
    
    </div>

    <h3 className='proteinH3'> Non-Veg</h3>
    <div className='Proteinbx'>   

    <SingleCard title={'Chicken'} id={30} />
<SingleCard title={'Egg'} id={31} />
<SingleCard title={'Fish'} id={32} />
<SingleCard title={'Mutton'} id={33} />
<SingleCard title={'Shrimp'} id={34} />
<SingleCard title={'Mussels'} id={35} />
<SingleCard title={'Crab meat'} id={36} />
    
    </div>
    </>
  )
}

export default Protien