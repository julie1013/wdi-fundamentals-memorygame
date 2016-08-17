
var gameBoard = document.getElementById("game-board");

// var cards = ["queen", "queen", "king", "king"];

var cards = [];

var numOfCards;

var cardsInPlay = [];

function shuffle(cards){
  var currentIndex = cards.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
};

function createBoard(){
  deckSize();
  console.log(numOfCards);
  for (var i = 0; i < numOfCards; i++){
    var cardElement = document.createElement("div");
    if (i % 2 === 0){
      cardElement.classList.add("king");
      cards.push(cardElement);
    } else {
      cardElement.classList.add("queen");
      cards.push(cardElement);
    }
    // cardElement.classList.add(cards[i]);
    cardElement.classList.add("unflipped");
    // cardElement.setAttribute("data-card", cards[i]);
    gameBoard.appendChild(cardElement);
    addListeners(cardElement);
    shuffle(cards);
  }
}

createBoard();

function isMatch(cardsInPlay){
  var firstCard;
  var secondCard;
  for (var i = 0; i < cardsInPlay.length; i++){
    firstCard = cardsInPlay[0].classList[0];
    secondCard = cardsInPlay[1].classList[0];
  }
  return firstCard === secondCard;
}

// function isTwoCards(){
//   return cardsInPlay.length === 2;
//   // cardsInPlay.push(this.getAttribute('data-card'));
//   // if (cardsInPlay.length === 2){
//   //   isMatch(cardsInPlay);
//   //   cardsInPlay = [];
//   // }
// }


function addListeners(){
  var cards = gameBoard.children;
  for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", flip);
    // if (isTwoCards()){
    // }
  }
}

function removeListeners(){
  var cards = gameBoard.children;
  for (var i = 0; i < cards.length; i++){
      cards[i].removeEventListener("click", flip);
  }
}

function flip(){
  cardsInPlay.push(this);
  if (this.className === "queen unflipped"){
      this.className = "queen flipped";
    } else if (this.className === "king unflipped"){
      this.className = "king flipped";
    }
    lastTwo();
  if (cardsInPlay.length === 2 && !isMatch(cardsInPlay)){
      removeListeners(cards);
      setTimeout(unFlipCards, 3000);
      addListeners();
    } else if (allCards()){
      setTimeout(unFlipCards, 3000);
    }
}


function unFlipCards(){
  // var cards = gameBoard.children;
  for (var i = 0; i < cardsInPlay.length; i++){
    cardsInPlay[i].classList.remove("flipped");
    cardsInPlay[i].classList.add("unflipped");
    cardsInPlay[i].addEventListener("click", flip);
  }
}


function allCards(){
  return cards.length === cardsInPlay.length;
}

function deckSize(){
  var rawNumber = Math.floor(Math.random() * 100);
  numOfCards = (2 * Math.round(rawNumber / 2));
  if (numOfCards < 4){
    numOfCards = numOfCards + 4;
  }
  return numOfCards;
}

function lastTwo() {
  if (cardsInPlay.length > 2){
    cardsInPlay.splice(0, cardsInPlay.length - 2);
  }
  return cardsInPlay;
}
