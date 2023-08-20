import React from 'react'
import './NutriTable.css'
import Food from './foodfinal1.json'
import { useEffect , useState } from 'react';
import EEmitter from '../../../utils/Emitter';





function NutriTable() {

    

    const [details, setDetails] = useState({
        'idR':0,
        'countR':0,
        'action': 0
    })



    const [myId, setMyId] = useState([])
    const [myCount , setMyCount] = useState([])
    const [baseValue, setBaseValue] = useState({
        calories:0,
        'fat':0,
        'cholestrol':0,
        'carbohydrates':0,
        'sugar':0,
        'protein':0

    })
    const [toppingValue, setToppingValue] = useState({
        calories:0,
        'fat':0,
        'cholestrol':0,
        'carbohydrates':0,
        'sugar':0,
        'protein':0

    })
    const [pickleValue, setPickleValue] = useState({
        calories:0,
        'fat':0,
        'cholestrol':0,
        'carbohydrates':0,
        'sugar':0,
        'protein':0

    })
    const [proteinValue, setProteinValue] = useState({
        calories:0,
        'fat':0,
        'cholestrol':0,
        'carbohydrates':0,
        'sugar':0,
        'protein':0

    })
    const [dressingValue, setDressingValue] = useState({
        calories:0,
        'fat':0,
        'cholestrol':0,
        'carbohydrates':0,
        'sugar':0,
        'protein':0

    })
    const [topOffValue, setTopOffValue] = useState({
        calories:0,
        'fat':0,
        'cholestrol':0,
        'carbohydrates':0,
        'sugar':0,
        'protein':0

    })

    let actualCount,actualId, actualAction


    useEffect(() => {
        EEmitter.subscribe("SendValues", (idRev , countRev , actionRev ) => {
            setDetails({
                'idR':idRev,
                'countR':countRev,
                'action':actionRev
              })
              setMyId(myId=>[...myId , idRev])
              setMyCount(myCount=>[...myCount , countRev])

              checkAndInsert(idRev , actionRev)
              //   actualId=details.idR
              console.log("Doing something with my data", idRev , countRev , actionRev );
            })
            return () =>{ 
                EEmitter.unsubscribe("SendValues")
            }
        }, [ 
            actualCount=details.countR,
            actualId=details.idR ,
            actualAction=details.action
        ])

    const checkAndInsert =(id , action)=>{
        // console.log(actualAction)
        if(action === 'inc'){
            // console.log(actualId);
            {Food.map(food=>{
                if(food.id===id){
                    if(food.id <= 4){

                        setBaseValue({
                            calories: baseValue.calories + food.calories,
                            'fat':baseValue.fat + food.totalFat,
                            'cholestrol':baseValue.cholestrol + food.cholesterol,
                            'carbohydrates':baseValue.carbohydrates + food.totalCarbohydrate,
                            'sugar':baseValue.sugar + food.sugars,
                            'protein':baseValue.protein + food.protein
                        })
                    }
                    else if(food.id <= 18){

                        setToppingValue({
                            calories: toppingValue.calories + food.calories,
                            'fat':toppingValue.fat + food.totalFat,
                            'cholestrol':toppingValue.cholestrol + food.cholesterol,
                            'carbohydrates':toppingValue.carbohydrates + food.totalCarbohydrate,
                            'sugar':toppingValue.sugar + food.sugars,
                            'protein':toppingValue.protein + food.protein
                        })
                    }

                    else if(food.id <= 21){

                        setPickleValue({
                            calories: pickleValue.calories + food.calories,
                            'fat':pickleValue.fat + food.totalFat,
                            'cholestrol':pickleValue.cholestrol + food.cholesterol,
                            'carbohydrates':pickleValue.carbohydrates + food.totalCarbohydrate,
                            'sugar':pickleValue.sugar + food.sugars,
                            'protein':pickleValue.protein + food.protein
                        })
                    }

                    else if(food.id <=36){

                        setProteinValue({
                            calories: proteinValue.calories + food.calories,
                            'fat':proteinValue.fat + food.totalFat,
                            'cholestrol':proteinValue.cholestrol + food.cholesterol,
                            'carbohydrates':proteinValue.carbohydrates + food.totalCarbohydrate,
                            'sugar':proteinValue.sugar + food.sugars,
                            'protein':proteinValue.protein + food.protein
                        })
                    }
                    else if(food.id <= 46){

                        setDressingValue({
                            calories: dressingValue.calories + food.calories,
                            'fat':dressingValue.fat + food.totalFat,
                            'cholestrol':dressingValue.cholestrol + food.cholesterol,
                            'carbohydrates':dressingValue.carbohydrates + food.totalCarbohydrate,
                            'sugar':dressingValue.sugar + food.sugars,
                            'protein':dressingValue.protein + food.protein
                        })
                    }
                    else if(food.id <= 77)
                    setTopOffValue({
                        calories: topOffValue.calories + food.calories,
                        'fat':topOffValue.fat + food.totalFat,
                        'cholestrol':topOffValue.cholestrol + food.cholesterol,
                        'carbohydrates':topOffValue.carbohydrates + food.totalCarbohydrate,
                        'sugar':topOffValue.sugar + food.sugars,
                        'protein':topOffValue.protein + food.protein
                    })
                  
                } return(null)
                }
            )};}

           else if(action === 'dec'){

            {Food.map(food=>{
                if(food.id===id){
                    if(food.id <= 4){

                        setBaseValue({
                            calories: baseValue.calories - food.calories,
                            'fat':baseValue.fat - food.totalFat,
                            'cholestrol':baseValue.cholestrol - food.cholesterol,
                            'carbohydrates':baseValue.carbohydrates - food.totalCarbohydrate,
                            'sugar':baseValue.sugar - food.sugars,
                            'protein':baseValue.protein - food.protein
                        })
                    }

                    else if(food.id <= 18){

                        setToppingValue({
                            calories: toppingValue.calories - food.calories,
                            'fat':toppingValue.fat - food.totalFat,
                            'cholestrol':toppingValue.cholestrol - food.cholesterol,
                            'carbohydrates':toppingValue.carbohydrates - food.totalCarbohydrate,
                            'sugar':toppingValue.sugar - food.sugars,
                            'protein':toppingValue.protein - food.protein
                        })
                    }

                    else if(food.id <= 21){

                        setPickleValue({
                            calories: pickleValue.calories - food.calories,
                            'fat':pickleValue.fat - food.totalFat,
                            'cholestrol':pickleValue.cholestrol - food.cholesterol,
                            'carbohydrates':pickleValue.carbohydrates - food.totalCarbohydrate,
                            'sugar':pickleValue.sugar - food.sugars,
                            'protein':pickleValue.protein - food.protein
                        })
                    }

                    else if(food.id <=36){

                        setProteinValue({
                            calories: proteinValue.calories - food.calories,
                            'fat':proteinValue.fat - food.totalFat,
                            'cholestrol':proteinValue.cholestrol - food.cholesterol,
                            'carbohydrates':proteinValue.carbohydrates - food.totalCarbohydrate,
                            'sugar':proteinValue.sugar - food.sugars,
                            'protein':proteinValue.protein - food.protein
                        })
                    }
                    else if(food.id <= 46){

                        setDressingValue({
                            calories: dressingValue.calories - food.calories,
                            'fat':dressingValue.fat - food.totalFat,
                            'cholestrol':dressingValue.cholestrol - food.cholesterol,
                            'carbohydrates':dressingValue.carbohydrates - food.totalCarbohydrate,
                            'sugar':dressingValue.sugar - food.sugars,
                            'protein':dressingValue.protein - food.protein
                        })
                    }
                    else if(food.id <= 77)
                    setTopOffValue({
                        calories: topOffValue.calories - food.calories,
                        'fat':topOffValue.fat - food.totalFat,
                        'cholestrol':topOffValue.cholestrol - food.cholesterol,
                        'carbohydrates':topOffValue.carbohydrates - food.totalCarbohydrate,
                        'sugar':topOffValue.sugar - food.sugars,
                        'protein':topOffValue.protein - food.protein
                    })


                  }}) 
            };

        }
    }

    function myFunction(id) {
    
        var clicked = id;
        var u = document.getElementById("detailsNutriBase");
        var v = document.getElementById("detailsNutriToppings");
        var w = document.getElementById("detailsNutriPickles");
        var x = document.getElementById("detailsNutriProtein");
        var y = document.getElementById("detailsNutriDressing");
        var z = document.getElementById("detailsNutriTopOff");
        
        if(clicked === 1){
            if(u.style.display === "block"){
                u.style.display = "none";
            }
            else{
                u.style.display = "block";
            }
            v.style.display = "none";
            w.style.display = "none";
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
            // console.log(actualCount , actualId);
            // console.log(actualValue)
            console.log(myId);
            console.log(myCount);



        }
        else if(clicked === 2){
            u.style.display = "none";
            if(v.style.display === "block"){
                v.style.display = "none";
            }
            else{
                v.style.display = "block";
            }
            w.style.display = "none";
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
        }
        else if(clicked === 3){
            u.style.display = "none";
            v.style.display = "none";
            if(w.style.display === "block"){
                w.style.display = "none";
            }
            else{
                w.style.display = "block";
            }
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
        }
        else if(clicked === 4){
            u.style.display = "none";
            v.style.display = "none";
            w.style.display = "none";
            if(x.style.display === "block"){
                x.style.display = "none";
            }
            else{
                x.style.display = "block";
            }
            y.style.display = "none";
        }
        else if(clicked === 5){
            u.style.display = "none";
            v.style.display = "none";
            w.style.display = "none";
            x.style.display = "none";
            if(y.style.display === "block"){
                y.style.display = "none";
            }
            else{
                y.style.display = "block";
            }
            z.style.display = "none";
        }
        else if(clicked === 6){
            u.style.display = "none";
            v.style.display = "none";
            w.style.display = "none";
            x.style.display = "none";
            if(y.style.display === "block"){
                z.style.display = "none";
            }
            else{
                z.style.display = "block";
            }
            y.style.display = "none";
        }
        else {

            u.style.display = "none";
            v.style.display = "none";
            w.style.display = "none";
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
            
        }
    
      }

      
//   var val = parseInt(0)
     
  return (
    <div className='NutriTable'>
    <h2>Full Nutrition Facts {'>'} totalCal-{(baseValue.calories+ toppingValue.calories
    +pickleValue.calories+ proteinValue.calories + dressingValue.calories + topOffValue.calories).toFixed(2)}g</h2>
    <table className='NutriTableTh'>

    {/* {Food.map(food=>{
        if( parseInt(actualId) === (food.id) ){
            return( */}
        <tr key={actualId}  >
        <th onClick={()=>{myFunction(1)}} >Base {baseValue.calories===0?'':-(baseValue.calories).toFixed(2)} </th>
        <div id='detailsNutriBase' >
        <td>Calories:{(baseValue.calories).toFixed(2)}</td>
        <td>Fat:{(baseValue.fat).toFixed(2)}</td>
        <td>Cholesterol:{(baseValue.cholestrol).toFixed(2)}</td>
        <td>Carbohydrate:{(baseValue.carbohydrates).toFixed(2)}</td>
        <td>Sugars:{(baseValue.sugar).toFixed(2)}</td>
        <td>Protein:{(baseValue.protein).toFixed(2)}</td>
        </div>
    </tr>
            {/* )
        }

        return (null);
    })} */}
    
    <hr />
    <tr>
        <th onClick={()=>{myFunction(2)}}>Toppings {toppingValue.calories===0?'':-(toppingValue.calories).toFixed(2)}</th>
        <div id='detailsNutriToppings'>
        <td>Calories:{(toppingValue.calories).toFixed(2)}</td>
        <td>Fat:{(toppingValue.fat).toFixed(2)} </td>
        <td>Cholesterol:{(toppingValue.cholestrol).toFixed(2)}</td>
        <td>Carbohydrate:{(toppingValue.carbohydrates).toFixed(2)}</td>
        <td>Sugars:{(toppingValue.sugar).toFixed(2)}</td>
        <td>Protein:{(toppingValue.protein).toFixed(2)}</td>
        </div>
    </tr>
    <hr />
    <tr>
        <th onClick={()=>{myFunction(3)}}>Pickles{pickleValue.calories===0?'':-(pickleValue.calories).toFixed(2)}</th>
        <div id='detailsNutriPickles'>
        <td>Calories:{(pickleValue.calories).toFixed(2)}</td>
        <td>Fat:{(pickleValue.fat).toFixed(2)}</td>
        <td>Cholesterol:{(pickleValue.cholestrol).toFixed(2)}</td>
        <td>Carbohydrate:{(pickleValue.carbohydrates).toFixed(2)}</td>
        <td>Sugars:{(pickleValue.sugar).toFixed(2)}</td>
        <td>Protein:{(pickleValue.protein).toFixed(2)}</td>
        </div>
    </tr>
    <hr />
    <tr>
        <th onClick={()=>{myFunction(4)}}>Protein {proteinValue.calories===0?'':-(proteinValue.calories).toFixed(2)}</th>
        <div id='detailsNutriProtein'>
        <td>Calories:{(proteinValue.calories).toFixed(2)}</td>
        <td>Fat:{(proteinValue.fat).toFixed(2)}</td>
        <td>Cholesterol:{(proteinValue.cholestrol).toFixed(2)}</td>
        <td>Carbohydrate:{(proteinValue.carbohydrates).toFixed(2)}</td>
        <td>Sugars:{(proteinValue.sugar).toFixed(2)}</td>
        <td>Protein:{(proteinValue.protein).toFixed(2)}</td>
        </div>
    </tr>
    <hr />
    <tr>
        <th onClick={()=>{myFunction(5)}}>Dressings{dressingValue.calories===0?'':-(dressingValue.calories).toFixed(2)}</th>
        <div id="detailsNutriDressing">
        <td>Calories:{(dressingValue.calories).toFixed(2)}</td>
        <td>Fat:{(dressingValue.fat).toFixed(2)}</td>
        <td>Cholesterol:{(dressingValue.cholestrol).toFixed(2)}</td>
        <td>Carbohydrate:{(dressingValue.carbohydrates).toFixed(2)}</td>
        <td>Sugars:{(dressingValue.sugar).toFixed(2)}</td>
        <td>Protein:{(dressingValue.protein).toFixed(2)}</td>
        </div>
    </tr>
    <hr/>
    <tr>
        <th onClick={()=>{myFunction(6)}}>Top Things Off {topOffValue.calories===0?'':-(topOffValue.calories).toFixed(2)}</th>
        <div id="detailsNutriTopOff">
        <td>Calories:{(topOffValue.calories).toFixed(2)}</td>
        <td>Fat:{(dressingValue.fat).toFixed(2)}</td>
        <td>Cholesterol:{(topOffValue.cholestrol).toFixed(2)}</td>
        <td>Carbohydrate:{(topOffValue.carbohydrates).toFixed(2)}</td>
        <td>Sugars:{(topOffValue.sugar).toFixed(2)}</td>
        <td>Protein:{(topOffValue.protein).toFixed(2)}</td>
        </div>
    </tr>
    <hr/>
    </table>
    </div>
  )
}

export default NutriTable