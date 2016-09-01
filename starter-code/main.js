
let gameBoard = document.getElementById("game-board");

let numOfCards = deckSize();

let cards = [];

let cardsInPlay = [];

let confirmedCards = [];

let usedIndex = [];

const Card = function(rank){
  this.rank = rank;
};

let king = new Card("king");
let queen = new Card("queen");

console.log("king is " ,king, "queen is ", queen);

function getRandomIndex(){
  return Math.floor(Math.random() * (numOfCards));
}

function duplicateIndexCheck(array, element){
  return array.includes(element);
}

const createBoard = function(length){
    for (var i = 0; i < length; i++){
      cards.push(setRank(i));
    }
    return cards;
};

console.log(cards);

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

// function uiConcerns(array, index, className){
//   array[index].setAttribute("class", className);
//   array[index].classList.add("unflipped");
// }

// function shuffle(cards){
//   var currentIndex = cards.length;
//   var temporaryValue;
//   while (0 !== currentIndex){
//     let randomIndex = getRandomIndex();
//     while(duplicateIndexCheck(usedIndex, randomIndex)){
//       randomIndex = getRandomIndex();
//     }
//     cards[randomIndex] = document.createElement("div");
//     setRank(randomIndex);
//     uiConcerns(cards, randomIndex, rank);
//     gameBoard.appendChild(cards[randomIndex]);
//     usedIndex.push(randomIndex);
//     currentIndex--;
//     temporaryValue = cards[currentIndex];
//     cards[currentIndex] = cards[randomIndex];
//     cards[randomIndex] = temporaryValue;
//   }
//   addListeners(cards);
//   return cards;
// }
//
createBoard(numOfCards);
// $(document).ready(function(){
//   shuffle(cards);
// });
//
// function deckSize(){
//   return 4 *(Math.floor(Math.random() * 25) + 1);
// }
//randomly chooses a number (divisible by 4) between 4 and 100
function deckSize(){
  return 4 *(Math.floor(Math.random() * 2) + 1);
}
//
//
//
//
// function addListeners(array){
//   for (var i = 0; i < array.length; i++){
//     array[i].addEventListener("click", flip);
//   }
// }
// //adds event listeners
//
//
// function flip(){
//   cardsInPlay.push(this);
//   if (this.className === "queen unflipped"){
//       this.className = "queen flipped";
//     } else if (this.className === "king unflipped"){
//       this.className = "king flipped";
//     }
//     lastTwo();
//   if (isTwoCards() && !isMatch(cardsInPlay)){
//       removeListeners();
//       setTimeout(unFlipCards, 3000);
//     } else if (isTwoCards() && isMatch(cardsInPlay)){
//       matched(cardsInPlay[0], cardsInPlay[1]);
//       cardsInPlay = [];
//         // if (allCards()){
//       // setTimeout(restart, 3000);
//         }
//       }
// //on "click" this function is called. If two cards are a match, they are pushed to the confirmed cards array.
//
// function isTwoCards(){
//   return cardsInPlay.length === 2;
// }
// //checks if two cards are in play
//
// function isMatch(cardsInPlay){
//   var firstCard;
//   var secondCard;
//   for (var i = 0; i < cardsInPlay.length; i++){
//     firstCard = cardsInPlay[0].classList[0];
//     secondCard = cardsInPlay[1].classList[0];
//   }
//   return firstCard === secondCard;
// }
// //check if two cards are matched
//
// function matched(a, b){
//   confirmedCards.push(a, b);
//   return confirmedCards;
// }
// //pushes matched cards into a new array that keeps track of how many cards have been flipped
//
// function removeListeners(){
//   for (var i = 0; i < cards.length; i++){
//       cards[i].removeEventListener("click", flip);
//   }
// }
// //removes event listeners
//
// function lastTwo() {
//   if (cardsInPlay.length > 2){
//     cardsInPlay.splice(0, cardsInPlay.length - 2);
//   }
//   return cardsInPlay;
// }
// //returns an array of the last two cards that were played
//
// function unFlipCards(){
//   for (var i = 0; i < cardsInPlay.length; i++){
//     cardsInPlay[i].classList.remove("flipped");
//     cardsInPlay[i].classList.add("unflipped");
//   }
//   cardsInPlay =[];
//   addListeners();
// }
// //unflip non-matched cards
//
// function allCards(){
//  return confirmedCards.length === cards.length;
// }


//confirms that all cards have been flipped

// function restart(){
//   cards = [];
//   gameBoard.innerHTML = "";
// }

//figure out how to reset when all cards are flipped
//"Play again" button
//once random index is used, it cannot be used again-- figure out how to prevent
// duplicate indexes from being used
//If possible, center bottom row
