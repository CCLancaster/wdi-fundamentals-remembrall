// console.log("Up and running!") - to test 

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

const checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

const flipCard = function() {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};

//"console.log" here is optional, but I found helpful when "inspecting" on Chrome. 
console.log(cardsInPlay);

const createBoard = function() {
		for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

const resetCards = function() {
    	for (let i = 0; i < cards.length; i++) {
    	let cardElement = document.getElementsByTagName('img');
    	cardElement[i].setAttribute('src', "images/back.png");
    }
 cardsInPlay.pop();
 cardsInPlay.pop();
};

const button = document.getElementById('button');

button.addEventListener('click', resetCards);

createBoard();


