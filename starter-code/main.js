
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
  var firstCard;
  var secondCard;
  for (var i = 0; i < cardsInPlay.length; i++){
    firstCard = cardsInPlay[0].classList[0];
    secondCard = cardsInPlay[1].classList[0];
  }
  return firstCard === secondCard;
}

function isTwoCards(){
  return cardsInPlay.length === 2;
  // cardsInPlay.push(this.getAttribute('data-card'));
  // if (cardsInPlay.length === 2){
  //   isMatch(cardsInPlay);
  //   cardsInPlay = [];
  // }
}


function addListeners(cardElement){
  for (var i = 0; i < cards.length; i++){
    cardElement.addEventListener("click", flip);
    if (isTwoCards()){
      alert("hi");
    }
  }
}

function flip(){
  cardsInPlay.push(this);
  if (this.className === "unflipped queen"){
      this.className = "queen-flipped";
    } else if (this.className === "unflipped king"){
      this.className = "king-flipped";
    }
    if (isTwoCards() && isMatch(cardsInPlay)){
      alert("hi");
    }
}

//clicking in the card calls functions:
//2. check if two cards are in play
//3. if two cards are in play, compare them (classes, etc)
//3a.If they are the same, player wins
//3b.If cards aren't the same, cards are flipped over again
