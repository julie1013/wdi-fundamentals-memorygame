var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";


var gameBoard = document.getElementById("game-board");

// if (cardOne == cardTwo){
//   alert ("You've found a match!");
// } else {
//   alert ("Sorry. Try again.");
// }


function createBoard(){
  for (var i = 0; i < 4; i++){
    var newCard = document.createElement("div");
    newCard.className="card";
    gameBoard.appendChild(newCard);
  }
}

createBoard();
