import { DomSelectors } from "./DomSelectors.js"; //imports an object from ./DomSelectors.js to make the code smaller
import {
  //imports arrays from ./generations.js to make the code smaller
  generation1Array,
  generation2Array,
  generation3Array,
  generation4Array,
  generation5Array,
  generation6Array,
  generation7Array,
  generation8Array,
} from "./generations.js";
import "regenerator-runtime/runtime";

async function searchPokemon(queryurl) {
  //grabing the api, and then turning the api in a json, then we return it
  const response = await fetch(queryurl, ["GET"]); //await means that it waits for the api to load before loading
  const pokemon = await response.json();
  return pokemon;
}

function mainMenu(){
  DomSelectors.menu.innerHTML = ""
  DomSelectors.container.innerHTML = ""
  DomSelectors.menu.insertAdjacentHTML(`beforeend`, `
  <button class="decision" id="quiz-option">Quiz</button>
  <button class="decision" id="pokedex-option">Pokédex</button>`)
  document.getElementById("quiz-option").addEventListener('click',quiz)
  document.getElementById("pokedex-option").addEventListener('click',showPokedex)
}

function quiz(){
  DomSelectors.container.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const button = document.getElementsByClassName("enter_submit");
      button[0].click();
    } //When a key is pressed the function checks if it is the enter key and if it is the firt button on the page with class enter_submit is clicked.
  });
  DomSelectors.container.innerHTML = ""
  DomSelectors.container.insertAdjacentHTML(
    //insertAdjacentHTML allows us to put HTML on top of the HTML we already created
    "beforeend", //beforeend is used instead of beforeafter because the html will be inserted at the bottom, meaning that all subsequent elements and blocks will also be at the bottom which makes it look like how it normally does it a normal HTML file while beforebegin will comepletely reverse how we wrote it.
    `<div class="selection">
    <label class ="statement1">Choose the generations you would like to do!</label> 
    <br> <input id="check1" type ="checkbox"> 
    <label class ="choice">Generation 1</label>
    <br> <input id="check2" type ="checkbox"> 
    <label class ="choice">Generation 2</label> 
    <br> <input id="check3" type ="checkbox"> 
    <label class ="choice">Generation 3</label> 
    <br> <input id="check4" type ="checkbox"> 
    <label class ="choice">Generation 4</label> 
    <br> <input id="check5" type ="checkbox"> 
    <label class ="choice">Generation 5</label> 
    <br> <input id="check6" type ="checkbox"> 
    <label class ="choice">Generation 6</label> 
    <br> <input id="check7" type ="checkbox"> 
    <label class ="choice">Generation 7</label> 
    <br> <input id="check8" type ="checkbox"> 
    <label class ="choice">Generation 8</label>
    <br>
    <a href=https://github.com/PokeAPI/pokedex/issues>Warning: Generation 8 May have several bugs</a>
    <br>
    <input type="submit" class="enter_submit" id="next" value="Next">
    <br>
    <br> 
    <label class = "statement2" id="statement2"></label>
    </div>`
    );
    let generationsSelected = []; // creates an array
  document.getElementById("next").addEventListener("click", function (e) {
  //listens for a click when user clicks on a specific element, in this case, its a button called "next"
  e.preventDefault(); //prevents page from reloading
  if (document.getElementById(`check1`).checked) {
    //inserts values into our generationsSelected array from the generations.js file if their checkbox was selected
    generationsSelected = generationsSelected.concat(generation1Array);
  }
  if (document.getElementById(`check2`).checked) {
    generationsSelected = generationsSelected.concat(generation2Array);
  }
  if (document.getElementById(`check3`).checked) {
    generationsSelected = generationsSelected.concat(generation3Array);
  }
  if (document.getElementById(`check4`).checked) {
    generationsSelected = generationsSelected.concat(generation4Array);
  }
  if (document.getElementById(`check5`).checked) {
    generationsSelected = generationsSelected.concat(generation5Array);
  }
  if (document.getElementById(`check6`).checked) {  
    generationsSelected = generationsSelected.concat(generation6Array);
  }
  if (document.getElementById(`check7`).checked) {
    generationsSelected = generationsSelected.concat(generation7Array);
  }
  if (document.getElementById(`check8`).checked) {
    generationsSelected = generationsSelected.concat(generation8Array);
  }
  if (generationsSelected == 0) {
    //prevents the quiz from starting if they didnt check a box.
    alert(`You didn't pick one...`);
  } else {
    DomSelectors.container.querySelector(".selection").innerHTML = ""; //completely wipes out the entire html in the div "container"
    DomSelectors.container.querySelector(".selection").insertAdjacentHTML(
      //puts in new HTML
      "afterend",
      `<label class = "statement2">Pick a number from 1-${generationsSelected.length} which will be the amount of Pokémon that will be given to you!
      </label>
      <br>
      <br>
      <input type="number" min="1" max='${generationsSelected.length}' placeholder="Enter #" class="number"> 
      <br>
      <br>
      <input type="submit" class="enter_submit" id="start" value="Start The Game">`
      );
      document.querySelector(".number").select();
      const submit = document.getElementById("start");
      submit.addEventListener("click", function () {
        //listens for the submit button to be clicked, and if it does, use the function which will be created on the spot
        const questionsrequested = document.querySelector(".number").value;
        const numquestions = parseInt(questionsrequested);
        if (questionsrequested != numquestions) {//checks if the input given is the same as the input without parts that are not present in an interger
          alert(
            "Please enter a whole number for the amount of questions that you want to play"
          );
        } else if (numquestions > generationsSelected.length) {
          //If they put a number greater than what was intended, the quiz won't start and they'll be warned
          alert(`Its Greater than ${generationsSelected.length}!!!`);
        } else if (numquestions < 1) {
          //If they put a number less than intended, the quiz won't start and will also warn them
          alert("If you don't wanna play any questions you don't have to play");
        } else {
          startgame(numquestions, generationsSelected); //starts quiz, saving the parameters to the function below(line 115)
        }
      });
    }
  });
  function startgame(questionamount, pokedexnumbers) {
    document.querySelector(".menu").innerHTML = "";
    let i = 0;
    let amountright = 0;
    let pokemondata;
    showquestion(); //call the async function
    async function showquestion() {
      if (i < questionamount) {
        //If the question is less than the total questions
        DomSelectors.container.innerHTML = "Loding... Please Wait"; //to prevent double clicking the button we added a loading screen
        i++; //increase the question counter by 1
        const pokedexnumber = pokedexnumbers[Math.floor(Math.random() * pokedexnumbers.length)]; //randomized the pokemon sent out to the quiz(lines 106 and 115)
        let index = generationsSelected.indexOf(pokedexnumber); //indexof records the actual value of the randomized pokemon number of the array, not the element
        generationsSelected.splice(index, 1); //we are calling the array and splice gets rid of the value listed as that of the random pokedex number in the array, 1 is the amount in the array we are removing
        let queryURL = `https://pokeapi.co/api/v2/pokemon/${pokedexnumber}`; //calling the api using a random number
        pokemondata = await searchPokemon(queryURL); //waits for the api to load
        console.log(pokemondata.name); //log the pokemon's name (used for testing will be cut out)
        DomSelectors.container.innerHTML = `<h1>Question ${i}</h1><br><h2>What is the name of the pokémon with pokédex number ${pokedexnumber}?</h2>
        <img class="pokemon" src="${pokemondata.sprites.front_default}">
        <br><input type="text" placeholder="Pokémon Name" class="number" id="answer">
        <br><input type="submit" class="enter_submit" id="submit" value="Submit"><br>
        <br><br><div id='counter'>You got ${amountright} out of ${i - 1} correct</div>`; //we ask the question, using the random pokemon number as the pokedex number, getting the image from the api's array, and recording the amount they got right.
        document.getElementById("submit").addEventListener("click", showanswer); //calls the function when u hit the submit which is in the scope
        document.getElementById("answer").select();
      } else {
        //if the questionnumber is equal to the questions they inputted, we show the results screen showing what they got right and wrong, and let them try again.
        mainMenu();
        DomSelectors.container.innerHTML = `You got ${amountright} out of ${i} correct</div>`;
        DomSelectors.menu.innerHTML = ""
        DomSelectors.menu.insertAdjacentHTML(`beforeend`, `
        <button class="decision" id="quiz-option">Quiz</button>
        <button class="decision" id="pokedex-option">Pokédex</button>`)
        document.getElementById("quiz-option").addEventListener('click',quiz)
        document.getElementById("pokedex-option").addEventListener('click',showPokedex)
      }
    }
    function showanswer() {
      const answer = document.getElementById("answer").value; //gets the string that the user inputted
      let sign;
      let identifier;
      if (answer.toLowerCase() === pokemondata.name) {
        //if the string all lowercased is equal to the name of the pokemon from the api, they get it right and one point is added
        amountright = amountright + 1;
        sign = "✓";
        identifier = "checkmark";
      } else {
        //if the string isn't equal to it, it'ss wrong
        sign = "✘";
        identifier = "crossmark";
      }
      DomSelectors.container.innerHTML = `<div><h1 class="identifier" id="${identifier}">${sign}</h1></div><div><h2>Your answer: ${answer}</h2></div><div><h2 class="pokemon-data-name">Correct answer: ${pokemondata.name}</h2></div><br><input type="submit" id="button" value="Next Question"><br><br><div id='counter'>You got ${amountright} out of ${i} correct</div>`;
      document.getElementById("button").addEventListener("click", showquestion); //shows them the answer, and if the click the button, it calls another function(line 120) which moves them to the next question
    }
  }
}

async function showPokedex(){
  let pokemonNumber = 1
  let queryURL = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
  let pokedexdata = await searchPokemon(queryURL);
  DomSelectors.container.innerHTML = ""
  DomSelectors.container.insertAdjacentHTML('beforeend', `<div id="pokedex">Pokédex</div>
  <form class="search-pokedex">
    <input type="text">
    <span class="search">🔍</span>
    <br>
    <div class="pokedex-entry">
      <div class="pokedex-name">Pokémon Name: Bulbasaur</div>
      <div class="pokedex-number">Pokedéx Number: ${pokemonNumber}</div>
      <div class="pagination">
        <button class="page" id="previous">previous</button>
        <button class="page" id="next">next</button>
      </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" class="pokedex-pokemon">
      <div class="stats">
        <div class="row1">
          <div id="hp">HP: ${pokedexdata.stats[0].base_stat}</div>
          <div id="specialatk">SPATK: ${pokedexdata.stats[3].base_stat}</div>
        </div>
        <div class="row2">
          <div id="atk">ATK: ${pokedexdata.stats[1].base_stat}</div>
          <div id="specialdef">SPDEF:${pokedexdata.stats[4].base_stat}</div>
        </div>
        <div class="row3">
          <div id="def">DEF: ${pokedexdata.stats[2].base_stat}</div>
          <div id="spd">SPD: ${pokedexdata.stats[5].base_stat}</div>
        </div>
      </div>
      <div class="weight">Weight: ${pokedexdata.weight}</div>
    </div>
  </div>
  </form>`)
}

mainMenu();