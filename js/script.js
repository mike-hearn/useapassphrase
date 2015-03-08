(function () {
   'use strict';
   // this function is strict...
}());

function generatePassword(numberOfWords) {
  // Cryptographically generated random numbers
  var array = new Uint32Array(numberOfWords);
  window.crypto.getRandomValues(array);

  // Empty array to be filled with wordlist
  var generatedPasswordArray = [];


  // Grab a random word, push it to the password array
  for (var i = 0; i < array.length; i++) {
      var index = (array[i] % 5852);
      generatedPasswordArray.push(wordlist[index]);
  }

  return generatedPasswordArray.join(' ');
}

function setStyleFromWordNumber(passwordField, numberOfWords) {
  var baseSize = '40';
  var newSize = baseSize * (4/numberOfWords);
  passwordField.setAttribute('style', 'font-size: ' + newSize + 'px;');
}

var selectField = document.getElementById('passphrase_select');
var passwordField = document.getElementById('passphrase');
var button = document.querySelector('.btn-generate');

// Initially run it upon load
passwordField.setAttribute("value", generatePassword(4));

button.addEventListener("click", function() {
  var numberOfWords = selectField.options[selectField.selectedIndex].value;
  setStyleFromWordNumber(passwordField, numberOfWords);
  passwordField.setAttribute("value", generatePassword(numberOfWords));
});
