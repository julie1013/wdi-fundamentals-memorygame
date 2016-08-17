
var gameBoard = document.getElementById("game-board");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function createBoard(){
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("div");
    cardElement.classList.add(cards[i]);
    cardElement.classList.add("unflipped");
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
    }
  }
}

function removeEventListener(cardElement){
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
    if (isTwoCards() && isMatch(cardsInPlay)){
      // alert("You win!");
    } else if (isTwoCards() && !isMatch(cardsInPlay)){
      removeEventListener(cards);
      setTimeout(unFlipCards, 3000);
    }
}


function unFlipCards(){
  cardsInPlay = [];
  var cards = gameBoard.children;
  for (var i = 0; i < cards.length; i++){
    cards[i].classList.remove("flipped");
    cards[i].classList.add("unflipped");
    cards[i].addEventListener("click", flip);
  }
}


