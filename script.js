const gameContainer = document.getElementById("game");


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "violet",
  "pink",
  "crimson",
  "navy",
  "gray",
  "chartreuse",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "violet",
  "pink",
  "crimson",
  "navy",
  "gray",
  "chartreuse"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // const cardImg = new Image();
    // cardImg.src = `imgs/${color}.gif`

    // newDiv.appendChild(cardImg);

    // call a function handleCardClick when a div is clicked on
    // newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let cardOne = "";

let cardTwo = "";

let classOne = "";

let classTwo = "";

function cleanSelectors(){
  cardOne = "";
  cardTwo = "";
  classOne = "";
  classTwo = "";
};

function flipCardsBack(){
  cardOne.classList.toggle('flipped');
  cardTwo.classList.toggle('flipped');
  cleanSelectors();
};

// TODO: Implement this function!
function handleCardClick(event) {
  const greatGrandParentColor = event.target.parentNode.parentNode.parentNode.className;
  const greatGrandParent = event.target.parentNode.parentNode.parentNode;
  document.body.style.backgroundColor = greatGrandParentColor;
  // you can use event.target to see which element was clicked
  // Modified to make parent class the main focus of development
  let clickCounter = 0;
  // while(clickCounter < 2){
  if(cardOne === ""){
    cardOne = greatGrandParent;
    classOne = greatGrandParentColor;
    cardOne.classList.toggle('flipped');
  } else {
    cardTwo = greatGrandParent;
    classTwo = greatGrandParentColor;
    cardTwo.classList.toggle('flipped');
    if (classOne !== classTwo){
      setTimeout(function(){flipCardsBack()},1000);
    } else {
      cleanSelectors();
      // Increment score by 10 Points Code Here
    }
  };
  console.log("Color: You just clicked", greatGrandParentColor);
  // Changes body's bg color based on card clicked
  console.log("Event: You just clicked", event);
  console.log("Target Style: You just clicked", event.target.style);
  console.log("GGP Style: You just clicked", greatGrandParent.style);
  // event.target.removeEventListener("click", handleCardClick);
}
// when the DOM loads
createDivsForColors(shuffledColors);

let gameDivs = document.querySelectorAll("#game div");

function appendImgs (array){
  for(let div of array){
    const divFront = document.createElement("div")
    divFront.classList.add('front');
    const cardFront = new Image();
    cardFront.src = `imgs/smb3-mario-card-uprezzed.png`;
    divFront.appendChild(cardFront);
    divFront.addEventListener("click", handleCardClick);
    let divBack = document.createElement("div");
    divBack.classList.add('back');
    const cardBack = document.createElement("img");
    cardBack.src = `imgs/${div.className}.gif`;
    divBack.append(cardBack);
    const card = document.createElement("div");
    card.classList.add('card');
    card.append(divFront);
    card.append(divBack);
    div.appendChild(card);
  };
};


appendImgs(gameDivs);