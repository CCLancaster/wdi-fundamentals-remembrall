// console.log("Up and running!") - to test 
// for possible use later:
// console.log("User flipped" + cardOne)
// console.log("User flipped" + cardTwo)



const cards = ['queen', 'queen', 'king', 'king']

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

	console.log("User flipped " + cardId + ".");
	cardsInPlay.push(cardId);
	checkForMatch ();
};

flipCard(cards[0]);
flipCard(cards[2]);

cardsInPlay.push(cardId);



