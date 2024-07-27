function setup() {

 // Getting all the required ingredients
  Brew ("espresso", ["coffee beans", "coffee grinder", "aeropress"]);
}

function Brew(whatToBrew = "nothing", ingredients = []) {
   console.log("now Brewing " + whatToBrew);
  
  //if ingredients are present
  if(ingredients.length > 1){
    console.log("ingredients are present")
  }
  
    if(ingredients.length > 0){
      showRecipe(ingredients);
  } 
  
  //if ingredients are not present
  else{
    console.log("Missing all ingredients")
  }
}

function showRecipe(collection = []) {
  for(let x=0; x<collection.length; x++) {
    console.log("element number-" + x + ": " + collection[x]);
  }
}

function setup(){
// Getting all the required ingredients
  Brew ("espresso", ["coffee beans", "coffee grinder", "aeropress"]);
}

function Brew(whatToBrew = "nothing", ingredients = []) {
   console.log("now Brewing " + whatToBrew);
  
  //if ingredients are present
  if(ingredients.length > 1){
    console.log("ingredients are present")
  }
  
    if(ingredients.length > 0){
      showRecipe(ingredients);
  } 
  
  //if ingredients are not present
  else{
    console.log("Missing all ingredients")
  }
}

function showRecipe(collection = []) {
  for(let x=0; x<collection.length; x++) {
    console.log("element number-" + x + ": " + collection[x]);
  }
}

