function dwarfRollCall(dwarves) {
  
  var list = ""; //creates an empty string array 
  
  for (var i = 0; i < dwarves.length; i++){
     list+= (i+1) + ". " + dwarves[i] + " ";
  }   //increments list by the expression
  return list;
}

function summonCaptainPlanet(planeteerCalls){
  //changes each element to uppercase and adds '!'
  
  for (var i = 0; i < planeteerCalls.length; i++){
    planeteerCalls[i] += planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  //loops through each element and checks if char = 4+
  
  var x;
  
  for (var i = 0; i < words.length; i++){
    if (words.length > 4){
      x = true;
    } else {
      x = false;
    }
  }
  return x;
}

function findTheCheese (foods) {
  //loops through each cheese element to match 
  
  var cheese = ["cheddar", "gouda", "camembert"];
  var arr = [];
  
  for (var i = 0; i<cheese.length; i++){
    if(foods.indexOf(cheese[i]) > 0){
      return arr += cheese[i];
    } else {
      return "no cheese!";
    }
   }
}

function wordsWithB(words){
  var bwords = [];
  
  for (var i = 0; i < words.length; i++){
    if (words[i].startsWith("b")){
      bwords.push(words[i]);
    }
  }

  return bwords;
  
}