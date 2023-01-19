//create card array
let cards = [0]; //ordered list of items array
let sum = 0;
let blackJack = false; //boolean in default noone has black jack
let stillPlaying = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

//creating a player object
let player = {
  name: "Riad",
  chips: 145
};
//Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
x;

//function to get a random number between 1 - 13
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  //if players get 1 , return the value to 11 , if 11-13 return to 10
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
//start button
function startGame() {
  stillPlaying = true;

  //variable declaration
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: ";

  //adding for loop to render the cards automatically
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "WOOHOO!! You have the black jack!!!";
    blackJack = true;
  } else {
    message = "you are out of the game";
    stillPlaying = false;
  }
  messageEl.textContent = message;
}

//new card functions
function newCard() {
  if (stillPlaying === true && blackJack === false) {
    let card = getRandomCard();
    sum += card;
    //push the new card with the old
    cards.push(card);
    renderGame();
  }
}
