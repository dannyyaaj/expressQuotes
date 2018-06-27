console.log('JS loaded');

$(document).ready(docReady);

function docReady() {
  console.log('jQuery loaded');
  $('#generateBtn').on('click', handleBtnClick);
}

function handleBtnClick() {
  console.log('Btn clicked');
  $.ajax({
    url: '/quotes',
    type: 'GET'
  }).done(function (response) {
    console.log(response);
    loopObj(response);
  }).fail(function (errorResponse) {
    console.log(errorResponse);
    alert('Request Failed, error: ' + errorResponse.status);
  })
}

function loopObj(object) {
  for (let i = 0; i < object.length; i++) {
    let ul = $('<ul class = "newUl"></ul>')
    $('#listSection ul').append(`<li class="author">${object[i].author}</li>`);


    $('.author').append(`<li>${object[i].text}</li>`);
    // $('.newUl').
  }
}