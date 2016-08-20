
var gameBoard = document.getElementById("game-board");

var cards = [];

var numOfCards = deckSize();

var cardsInPlay = [];

var confirmedCards = [];

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
  for (var i = 0; i < numOfCards; i++){
    var cardElement = document.createElement("div");
    // if (i % 2 === 0){
    //   cardElement.classList.add("king");
      cards.push(cardElement);
    // } else {
    //   cardElement.classList.add("queen");
      // cards.push(cardElement);
      // cardElement.classList.add("unflipped");
    // gameBoard.appendChild(cardElement);
    // addListeners(cardElement);
    }

    return cards;
  }
// }

function drawBoard(){
  createBoard();

  for (var i = 0; i < cards.length; i++) {
     if (i % 2 === 0){
      cards[i].classList.add("king");
  } else {
      cards[i].classList.add("queen");
    }
    cards[i].classList.add("unflipped");
    gameBoard.appendChild(cards[i]);
    addListeners(cards[i]);
    // shuffle(cards);
  }
}

// createBoard();
drawBoard();

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

function restart(){
  var cards = document.getElementsByClassName("flipped");
  cards.parentNode.removeChild(cards);
  createBoard();
}

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
//make sure cards are randomized!
//Should I set it that number of cards when divided must yield an even number?
//"Play again" button
//score?


