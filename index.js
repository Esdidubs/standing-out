let cardNum = 0;

// Items to run in the beginning of the page load
$(function() {
	buttons();
	shuffle(STORE);

	$('#cardSection').hide();
	$('#newCard').hide();
	$('#btnRules').hide();
});

// Events for all of the buttons
function buttons() {

	// we use cardForm because it always exists
	$('#cardForm').on('click', '#newGame', function() {
		event.preventDefault();
		getCard();
		if ($('#rules').is(':visible')) {
			$('#rules').hide();
		}
		$('#newGame').hide();
		$('#newCard').show();
		$('#btnRules').show();
		$('#cardSection').show();
	});

	$('#cardForm').on('click', '#newCard', function() {
		event.preventDefault();
		getCard();
	});

	$('#cardForm').on('click', '#btnRules', function() {
		event.preventDefault();
		$('#rules').toggle();
	});
}

// Fisher-Yates shuffle to ensure the array is shuffled
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[ array[i], array[j] ] = [ array[j], array[i] ];
	}
}

// Grabs the card based on the current card number
function getCard() {
	if (cardNum >= 52) {
		cardNum = 0;
	}
	let setCard = STORE[cardNum];
	displayCard(setCard);
	cardNum++;
}

// Updates the image in #cardSection with a new url
function displayCard(card) {
	$('#cardSection').html(`<img src=${card} alt="Standing Out Card" class="roundCard" />`);
}