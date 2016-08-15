
var gameBoard = document.getElementById("game-board");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function createBoard(){
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("div");
    cardElement.classList.add("unflipped");
    cardElement.classList.add(cards[i]);
    // cardElement.setAttribute("data-card", cards[i]);
    gameBoard.appendChild(cardElement);
    addListeners(cardElement);

  }
}

createBoard();

function isMatch(cardsInPlay){
  for (var i = 0; i < cardsInPlay.length; i++){
    return cardsInPlay[i] === cardsInPlay[i + 1];
  }

}

function isTwoCards(){
  // cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}


function addListeners(cardElement){
  for (var i = 0; i < cards.length; i++){
    cardElement.addEventListener("click", flip);
  }
}

function flip(){
cardsInPlay.push(this.getAttribute('data-card'));
  if (this.className === "queen"){
      alert("hi");
      this.className = "queen-flipped";
    }
}
// think this is referring to the wrong thing

//clicking in the card calls functions:
//1. flip the card
//2. check if two cards are in play
//3. if two cards are in play, compare them (classes, etc)
//3a.If they are the same, player wins
//3b.If cards aren't the same, cards are flipped over again
