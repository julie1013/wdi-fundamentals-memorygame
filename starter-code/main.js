
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

const deckSize = function(){
  return 4 *(Math.floor(Math.random() * 25) + 1);
};
//randomly chooses a number (divisible by 4) between 4 and 100

// const deckSize = function(){
//   return 4 *(Math.floor(Math.random() * 2) + 1);
// };

let numOfCards = deckSize();
//determine number of cards in game

const getRandomIndex = function(){
  return Math.floor(Math.random() * (numOfCards));
};
//get random index for shuffle

const createBoard = function(length){
    for (var i = 0; i < length; i++){
      cards.push(setRank(i));
    }
    return cards;
};
//create the array of cards

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

const allCards = function(){
 return confirmedCards.length === cards.length;
};
//have all cards been flipped?

const greaterThanFour = function(array){
  return array.length > 4;
};
//are there more than 4 cards?

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
    setPosition(cards, card, i);
  }
};
//set up cards in the browser

const cardsRemaining = function(array){
  return array.length % 7;
};
//If the number of cards is not divisible by 7, how many are remaining?

const setPosition = function(array, element, index){
  if (greaterThanFour(cards) && index === cards.length - cardsRemaining(cards)){
    switch (index) {
      case (index = cards.length - 1):
      element.style.marginLeft = "490px";
      break;
      case (index = cards.length - 2):
      element.style.marginLeft = "410px";
      break;
      case (index = cards.length - 3):
      element.style.marginLeft = "330px";
      break;
      case (index = cards.length - 4):
      element.style.marginLeft = "240px";
      break;
      case (index = cards.length - 5):
      element.style.marginLeft = "165px";
      break;
      case (index = cards.length - 6):
      element.style.marginLeft = "80px";
      break;
    }
  }
};
//set position of remaining cards (after the number of cards has been divided
//by 7)

const duplicateIndexCheck = function(array, element){
  return array.includes(element);
};
//for shuffle, checks if duplicate indexes have been used

 const shuffle = function(array){
  var currentIndex = array.length;
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

//shuffles cards

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
//sets king or queen class to card

const addListeners = function(){
  let cards = gameBoard.children;
  for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", flip);
  }
};
// //adds event listeners

const removeListeners = function(){
  let cards = gameBoard.children;
  for (let i = 0; i < cards.length; i++){
    cards[i].removeEventListener("click", flip);
    }
 };
// //removes event listeners


const lastTwo = function() {
  if (cardsInPlay.length > 2){
    cardsInPlay.splice(0, cardsInPlay.length - 2);
  }
  return cardsInPlay;
};
//returns an array of the last two cards that were played


const isTwoCards = function(){
  return cardsInPlay.length === 2;
};
//checks if two cards are in play

const isMatch = function(cardsInPlay){
  var firstCard;
  var secondCard;
  for (var i = 0; i < cardsInPlay.length; i++){
    firstCard = cardsInPlay[0].classList[0];
    secondCard = cardsInPlay[1].classList[0];
  }
  return firstCard === secondCard;
};
 //check if two cards are matched

const matched = function(a, b){
  confirmedCards.push(a, b);
  return confirmedCards;
};
//pushes matched cards into a new array that keeps track of how many cards have been flipped



const unFlipCards = function(){
  for (var i = 0; i < cardsInPlay.length; i++){
    cardsInPlay[i].classList.remove("flipped");
    cardsInPlay[i].classList.add("unflipped");
  }
  cardsInPlay = [];
  addListeners(cards);
};
//unflip non-matched cards

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
      setTimeout(unFlipCards, 3000);
    } else if (isTwoCards() && isMatch(cardsInPlay)){
      matched(cardsInPlay[0], cardsInPlay[1]);
      cardsInPlay = [];
      if (allCards()){
    setTimeout(restart, 3000);
        }
      }
  };
//on "click" this function is called. If two cards are a match, they are pushed to the confirmed cards array.

    createBoard(numOfCards);
    shuffle(cards);
    setClass(cards);
    drawBoard(cards, Card.rank);




const restart = function(){
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
  cards = [];
  cardsInPlay = [];
  confirmedCards = [];
  usedIndex = [];
  numOfCards = deckSize();
  createBoard(numOfCards);
  shuffle(cards);
  setClass(cards);
  drawBoard(cards, Card.rank);
};
//restarts game after player wins
