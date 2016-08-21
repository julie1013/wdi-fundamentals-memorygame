
var gameBoard = document.getElementById("game-board");

var cards = [];

var numOfCards = deckSize();

var cardsInPlay = [];

var confirmedCards = [];

var usedIndex = [];


function createBoard(){
  var currentIndex = numOfCards;
  var randomIndex;
  while (0 !== currentIndex){
    var card = document.createElement("div");
    randomIndex = Math.floor(Math.random() * currentIndex);
      if (duplicateIndex(usedIndex, randomIndex)){
        randomIndex = Math.floor(Math.random() * currentIndex);
    }
    if (randomIndex % 2 === 0){
      card.setAttribute("class", "king");
    } else {
      card.setAttribute("class", "queen");
    }
    card.classList.add("unflipped");
    addListeners();
    gameBoard.appendChild(card);
    cards.push(card);
    usedIndex.push(randomIndex);
    console.log(usedIndex);
    currentIndex--;
  }
}


createBoard();

function duplicateIndex(array, element){
  for (var i = 0; i < array.length; i++){
    if (element === array[i]){
      return true;
    }
  }
  return false;
}


function isMatch(cardsInPlay){
  var firstCard;
  var secondCard;
  for (var i = 0; i < cardsInPlay.length; i++){
    firstCard = cardsInPlay[0].classList[0];
    secondCard = cardsInPlay[1].classList[0];
  }
  return firstCard === secondCard;
}

function matched(a, b){
  confirmedCards.push(a, b);
  return confirmedCards;
}

function addListeners(){
  for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", flip);
  }
}

function removeListeners(){
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
  if (isTwoCards() && !isMatch(cardsInPlay)){
      removeListeners();
      setTimeout(unFlipCards, 3000);
    } else if (isTwoCards() && isMatch(cardsInPlay)){
      matched(cardsInPlay[0], cardsInPlay[1]);
      cardsInPlay = [];
        if (allCards()){
      setTimeout(restart, 3000);
      }
    }
}

function isTwoCards(){
  return cardsInPlay.length === 2;
}

function unFlipCards(){
  for (var i = 0; i < cardsInPlay.length; i++){
    cardsInPlay[i].classList.remove("flipped");
    cardsInPlay[i].classList.add("unflipped");
  }
  cardsInPlay =[];
  addListeners();
}


function allCards(){
 return confirmedCards.length === cards.length;
}

// function restart(){
//   cards = [];
//   gameBoard.innerHTML = "";
// }

function deckSize(){
  return 4 *(Math.floor(Math.random() * 25) + 1);
}

function lastTwo() {
  if (cardsInPlay.length > 2){
    cardsInPlay.splice(0, cardsInPlay.length - 2);
  }
  return cardsInPlay;
}



//figure out how to reset when all cards are flipped
//"Play again" button
//once random index is used, it cannot be used again

