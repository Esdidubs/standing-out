function getCard(){
    let ranNum = Math.floor(Math.random() * Math.floor(52));
    let ranCard = `${STORE[ranNum]}`;
    displayCard(ranCard);
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
  });