
var gameBoard = document.getElementById("game-board");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

// if (cardOne == cardTwo){
//   alert ("You've found a match!");
// } else {
//   alert ("Sorry. Try again.");
// }


function createBoard(){
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.setAttribute("data-card", cards[i]);
    gameBoard.appendChild(cardElement);
    addListeners(cardElement);

  }
}

// addListeners(cardElement);
createBoard();

function isMatch(cardsInPlay){
  for (var i = 0; i < cardsInPlay.length; i++){
    return cardsInPlay[i] === cardsInPlay[i + 1];
  }

}

function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}


function test(){
  alert("hi");
}

function addListeners(cardElement){
  for (var i = 0; i < cards.length; i++){
    cardElement.addEventListener("click", isTwoCards);
  }
}

// function flip(cardElement){
// cardsInPlay.push(cardElement);
//   if (this.hasAttribute("queen")){
//     alert("hi");
//       cardElement.innerHTML = "<img src='../starter-code/images/queen.png'>";
//       cardElement.className = "queen";
//     }
// }

//clicking in the card calls functions:
//1. flip the card
//2. check if two cards are in play
//3. if two cards are in play, compare them (classes, etc)
//3a.If they are the same, player wins
//3b.If cards aren't the same, cards are flipped over again
