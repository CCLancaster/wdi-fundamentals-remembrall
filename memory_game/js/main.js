// console.log("Up and running!") - to test 
// for possible use later:
// console.log("User flipped" + cardOne)
// console.log("User flipped" + cardTwo)



const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suite: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch () {
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
};

let cardId;

function flipCard(cardId) {

	console.log("User flipped " + cardId.rank + ".");
	console.log(cardId.cardImage);
	console.log(cardId.suit);
	cardsInPlay.push(cardId.rank);
	checkForMatch ();

};

flipCard(cards[0]);
flipCard(cards[2]);




