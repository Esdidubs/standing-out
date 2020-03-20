let shuffledArray = [];
let cardNum = 0;

// Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    shuffledArray = array;
    return shuffledArray;
}

function getCard(){
    if(cardNum >= 52){
        cardNum =0;
    }
    let setCard = shuffledArray[cardNum];
    console.log(cardNum)
    displayCard(setCard);
    cardNum++;
}

function displayCard(card){
    $('#cardSection').replaceWith(
        `<div id="cardSection">
            <img src=${card} alt="Standing Out Card" class="roundCard" />
        </div>`
      )
}

// Events for all of the buttons
function buttons() {
    $('#cardForm').on( "click", "#newGame", function() {
      event.preventDefault();
      getCard();
      if(!($('#rules').hasClass('hidden'))){
        $('#rules').addClass('hidden');
      };
      $('#newGame').addClass('hidden');
      $('#newCard').removeClass('hidden');
      $('#btnRules').removeClass('hidden');
    });

    $('#cardForm').on( "click", "#newCard", function() {
        event.preventDefault();
        getCard();
      });

    $('#cardForm').on( "click", "#btnRules", function() {
        event.preventDefault();
        $('#rules').toggleClass('hidden');
      });
   
  }


// Items to run in the beginning of the page load
$(function() {
    buttons();
    shuffle(STORE);
  });