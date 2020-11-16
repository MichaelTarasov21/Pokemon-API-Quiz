import { DomSelectors } from "./DomSelectors.js";
import {
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
  const response = await fetch(queryurl, ["GET"]);
  const pokemon = await response.json();
  return pokemon;
}
DomSelectors.container.insertAdjacentHTML(
  "beforeend",
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
 <br>
 <input type="submit" class="submitting" id="next" value="Next">
 <br>
 <br> 
 <label class = "statement2" id="statement2"></label>
</div>`
);

const next = document.getElementById("next");

next.addEventListener("click", function (e) {
  e.preventDefault();
  let generationsinplay = [];
  if (document.getElementById(`check1`).checked) {
    generationsinplay = generationsinplay.concat(generation1Array);
  }
  if (document.getElementById(`check2`).checked) {
    generationsinplay = generationsinplay.concat(generation2Array);
  }
  if (document.getElementById(`check3`).checked) {
    generationsinplay = generationsinplay.concat(generation3Array);
  }
  if (document.getElementById(`check4`).checked) {
    generationsinplay = generationsinplay.concat(generation4Array);
  }
  if (document.getElementById(`check5`).checked) {
    generationsinplay = generationsinplay.concat(generation5Array);
  }
  if (document.getElementById(`check6`).checked) {
    generationsinplay = generationsinplay.concat(generation6Array);
  }
  if (document.getElementById(`check7`).checked) {
    generationsinplay = generationsinplay.concat(generation7Array);
  }
  if (document.getElementById(`check8`).checked) {
    generationsinplay = generationsinplay.concat(generation8Array);
  }
  if (generationsinplay == 0) {
    alert(`You didn't pick one...`);
  } else {
    DomSelectors.container.querySelector(".selection").innerHTML = "";
    DomSelectors.container.querySelector(".selection").insertAdjacentHTML(
      "afterend",
      `<label class = "statement2">Pick a number from 1-${generationsinplay.length} which will be the amount of Pokémon that will be given to you!</label>
    <br>
    <br>
    <input type="number" min="1" max='${generationsinplay.length}' placeholder="Enter #" class="number"> 
    <br>
    <br>
    <input type="submit" class="submitting" id="start" value="Start The Game">`
    );
    const submit = document.getElementById("start");
    submit.addEventListener("click", function () {
      if (document.querySelector(".number").value > generationsinplay.length) {
        alert(`Its Greater than ${generationsinplay.length}!!!`);
      } else if (document.querySelector(".number").value < 1) {
        alert("If you don't wanna play any questions you don't have to play");
      } else {
        startgame(document.querySelector(".number").value, generationsinplay);
      }
    });
  }
});
function startgame(questionamount, pokedexnumbers) {
  let i = 0;
  showquestion();
  console.log(questionamount)
  async function showquestion() {
    if (i < questionamount) {
      i = i + 1
      const pokedexnumber =
        pokedexnumbers[Math.floor(Math.random() * pokedexnumbers.length)];
      const queryurl = `https://pokeapi.co/api/v2/pokemon/${pokedexnumber}`;
      const pokemondata = await searchPokemon(queryurl);
      console.log(pokemondata);
      DomSelectors.container.innerHTML = `<h1>Question ${
        i
      }</h1><br><h2>What is the name of the pokemon with pokedex number ${pokedexnumber}?</h2><br><input type="text" placeholder="Pokemon Name" class="number" id="answer"><br><input type="submit" class="submitting" id="submit" value="Submit">`;
      document
        .getElementById("submit")
        .addEventListener("click", showanswer(pokemondata));
    }
  }
  function showanswer(pokemondata) {
    const answer = document.getElementById("answer").value;
    if (answer.toLowerCase() === pokemondata.name) {
      console.log("answer good");
    } else {
      console.log("answer bad");
    }
    showquestion();
  }
}

/* add an event listener that will record the checked generations 
new html that will record the amount of questions they want to do based on the generations they picked from 1 - 893
add an event listener to record those questions
begin the quiz
display quiz
______________________________________________ Done
show if they got it right
if not then no
if yes then yes
at the end, tell them they got it right
also make sure that the pokemon doesnt get repeated */
