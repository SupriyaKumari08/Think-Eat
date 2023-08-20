import React from 'react'
import EEmitter from '../../../utils/Emitter';
import './SingleCard.css'
import { useState , useEffect } from 'react';


export const countContext = React.createContext(0)

function SingleCard(props ) {

  const [count, setCount] = useState(0)

    var details={
      'id':props.id,
      'count':count
    }


    useEffect(() => {
      const data = localStorage.getItem(`count-${details.id}`)
      if(data){
        setCount(JSON.parse(data));
      }

    }, []);

  const storeLocal =((idLocal , countLocal) => {
    window.localStorage.setItem(`count-${idLocal}`, countLocal);
    
  });


    var action={
      'inc':'inc',
      'dec':'dec'
    }
    const handleTriggerEvent = (id , count , action) => {
      storeLocal(id , count );
      EEmitter.emit("SendValues", id , count , action)

    }



const sendValue = (inc ) =>{
    if(inc === 'inc'){

      return(handleTriggerEvent(details.id , details.count+1 , action.inc) )
    }
    else{

      return(handleTriggerEvent(details.id , details.count-1 , action.dec) )
    }
}




  return (
    <>

        <div className="box" >

            <p>{props.title}</p>
            <div className='func'>
            <div className="buttonParent" >


            <button onClick={()=>{setCount(count-1) ; sendValue('dec') }} disabled={!count}>-</button>
            <button onClick={()=>{setCount(count+1) ; sendValue('inc')}} >+</button>
              


            <div>
            {count}

            </div>
            


            </div>
            </div>
        </div>
           

    
    </>

  )
}
// export var returnData
export default SingleCard 

