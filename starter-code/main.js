
let gameBoard = document.getElementById("game-board");

let cards = [];

let cardsInPlay = [];

let confirmedCards = [];

let usedIndex = [];

const Card = function(rank){
  this.rank = rank;
};

let king = new Card("king");
let queen = new Card("queen");

// const deckSize = function(){
//   return 4 *(Math.floor(Math.random() * 25) + 1);
// }
//randomly chooses a number (divisible by 4) between 4 and 100
const deckSize = function(){
  return 4 *(Math.floor(Math.random() * 2) + 1);
};

let numOfCards = deckSize();


const getRandomIndex = function(){
  return Math.floor(Math.random() * (numOfCards));
}

function duplicateIndexCheck(array, element){
  return array.includes(element);
}

const createBoard = function(length){
    for (var i = 0; i < length; i++){
      cards.push(setRank(i));
    }
    return cards;
};

const setRank = function(index){
  let rank;
  if (index % 2 === 0) {
    rank = king;
  } else {
    rank = queen;
  }
  return rank;
};
//sets rank to card

const flip = function(){
  cardsInPlay.push(this);
  if (this.className === "queen unflipped"){
      this.className = "queen flipped";
    } else if (this.className === "king unflipped"){
      this.className = "king flipped";
    }
    lastTwo();
  if (isTwoCards() && !isMatch(cardsInPlay)){
      removeListeners(cards);
      setTimeout(unFlipCards(cardsInPlay), 3000);
    } else if (isTwoCards() && isMatch(cardsInPlay)){
      matched(cardsInPlay[0], cardsInPlay[1]);
      cardsInPlay = [];
        // if (allCards()){
      // setTimeout(restart, 3000);
        }
      };

const drawBoard = function(array, type){
  for (let i = 0; i < array.length; i++){
    let card = document.createElement("div");
    if (array[i].className === "king"){
      card.className = "king"
    } else {
      card.className = "queen";
    }
    card.classList.add("unflipped");
    card.addEventListener("click", flip);
    gameBoard.appendChild(card);

  }
};

 const shuffle = function(cards){
  var currentIndex = cards.length;
  var temporaryValue;
  while (0 !== currentIndex){
    let randomIndex = getRandomIndex();
    while(duplicateIndexCheck(usedIndex, randomIndex)){
      randomIndex = getRandomIndex();
    }
    usedIndex.push(randomIndex);
    currentIndex--;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
};

const setClass = function(array){
  for (let i = 0; i < array.length; i++){
    if (array[i].rank === "king"){
      array[i].className = "king";
    } else {
      array[i].className = "queen";
    }
  }
  return array;
};

createBoard(numOfCards);
shuffle(cards);
setClass(cards);
drawBoard(cards, Card.rank);


const addListeners = function(array){
  for (var i = 0; i < array.length; i++){
    array[i].addEventListener("click", flip);
  }
};
// //adds event listeners
//
//

// //on "click" this function is called. If two cards are a match, they are pushed to the confirmed cards array.

const lastTwo = function() {
  if (cardsInPlay.length > 2){
    cardsInPlay.splice(0, cardsInPlay.length - 2);
  }
  return cardsInPlay;
};
// //returns an array of the last two cards that were played


const isTwoCards = function(){
  return cardsInPlay.length === 2;
};
// //checks if two cards are in play
//
const isMatch = function(cardsInPlay){
  var firstCard;
  var secondCard;
  for (var i = 0; i < cardsInPlay.length; i++){
    firstCard = cardsInPlay[0].classList[0];
    secondCard = cardsInPlay[1].classList[0];
  }
  return firstCard === secondCard;
};
// //check if two cards are matched
//
const matched = function(a, b){
  confirmedCards.push(a, b);
  return confirmedCards;
};
// //pushes matched cards into a new array that keeps track of how many cards have been flipped
//
const removeListeners = function(array){
  for (var i = 0; i < array.length; i++){
      array[i].removeEventListener("click", flip);
  }
};
// //removes event listeners
//not working
//
const unFlipCards = function(array){
  for (var i = 0; i < array.length; i++){
    array[i].classList.remove("flipped");
    array[i].classList.add("unflipped");
  }
  array =[];
  // addListeners();
};
// //unflip non-matched cards
//
// function allCards(){
//  return confirmedCards.length === cards.length;
// }


//confirms that all cards have been flipped

// function restart(){
//   cards = [];
//   gameBoard.innerHTML = "";
// }

//figure out how to reset when all cards are flipped
//"Play again" button
//once random index is used, it cannot be used again-- figure out how to prevent
// duplicate indexes from being used
//If possible, center bottom row
