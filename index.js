//variable declaration
let firstCard = 3;
let secondCard = 11;
let sum = firstCard + secondCard;
let blackJack = false; //boolean in default noone has black jack

if (sum <= 20) {
  console.log("do you want to draw another card?");
} else if (sum === 21) {
  console.log("WOOHOO! You have the black jack!!!");
}
// else if (sum > 21) {
//   console.log("You're out of the game, Play again later");
// }
else {
  console.log("you are out of the game");
}


//cashing out