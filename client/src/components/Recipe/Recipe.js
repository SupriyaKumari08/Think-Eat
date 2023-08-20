import React, {useState} from "react";
import Axios from "axios";
import "./Recipe.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const APP_ID="2b9985c6";
const APP_KEY="f74d6535d5be566f975333f84990f1dc";

const Recipebox=(props)=>{
   const {recipeObj}=props; //Destructuring
   return(
    <div id="slider">
          <div className="slider-card">
            <img className="card-img" alt="" src={recipeObj.image} />
              <h3 className="slider-card-title">{recipeObj.label}</h3>
              {/* <p className="slider-card-ingredients">Ingredients</p> */}
              <p className="slider-card-more" onClick={()=>window.open(recipeObj.url)}>See full recipe</p>
            </div>
          </div>
   )
}


const Recipe = (props) => {

  const [timeoutId,updateTimeoutId] = useState();
  const [recipeList,updateRecipeList] = useState([]);

  const fetchRecipe = (searchString) =>{
    Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ).then(function(response){
      console.log(response);
      updateRecipeList(response.data.hits);
    });
  }; 
  
  
  const onTextChange = (e) =>{
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value),500); //We wait for few seconds for the user to enter desired value and then fire the function to prevent unnecessary multiple func calls : DEBOUNCING CONECEPT
    updateTimeoutId(timeout);
    }

  const slideLeft = () => {
    var card = document.getElementById("cards");
    card.scrollLeft = card.scrollLeft - 700;
  };

  const slideRight = () => {
    var card = document.getElementById("cards");
    card.scrollLeft = card.scrollLeft + 700;
  };


  const handleSubmit = event => {
    // prevent page refresh
    event.preventDefault();
  };

  


  return (
    <div className="main-container">
       <div className="semi-circ">
       <img className="header-text" src={require('./recipe.png')}  /></div>
       <img className="foodbowl1" src={require('./foodbowl1.png')} />
       <img className="foodbowl2" src={require('./foodbowl2.png')} />
       <img className="foodbowl3" src={require('./foodbowl3.png')}  />
       <img className="foodbowl4" src={require('./foodbowl4.png')}  />
       <img className="foodbowl5" src={require('./foodbowl5.png')}  />

       <div className="search-container">
       <form onSubmit={handleSubmit} role="search">
       <input id="search" type="search" placeholder="Search" onChange={onTextChange}/>
       <button id="search-btn" type="submit">Go</button>    
       </form>
       </div>

      <div className="card-container">
      <MdChevronLeft size={25} id="slideLeft" onClick={slideLeft} />

        <div id="cards">
              {recipeList.map((recipeObj,index) =>(
                <Recipebox key={index} recipeObj={recipeObj.recipe}/>
              ))}
      
        </div>

        <MdChevronRight size={25} id="slideRight" onClick={slideRight}/>


      </div>
    </div>
  );
};

export default Recipe;
