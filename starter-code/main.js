
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
    cardElement.addEventListener("click", isTwoCards);
    if (document.querySelector(".queen")){
      cardElement.innerHTML = "<img src='../starter-code/images/queen.png'>";
      cardElement.className = "queen";

    }
  }
}

createBoard();

function isMatch(){

}

function isTwoCards(){
  cardsInPlay.push(this.getAttribute("data-card"));
  if (cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
