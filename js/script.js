'use strict';

// Cryptographic replacement for Math.random()
function randomNumberBetweenZeroAndOne() {
  var crypto = window.crypto || window.msCrypto;
  return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}

function generatePassword(numberOfWords) {
  numberOfWords = parseInt(numberOfWords);

  // Empty array to be filled with wordlist
  var generatedPasswordArray = [];


  // Grab a random word, push it to the password array
  for (var i = 0; i < numberOfWords; i++) {
      var index = Math.floor(randomNumberBetweenZeroAndOne() * 7776)
      generatedPasswordArray.push(wordlist[index]);
  }

  return generatedPasswordArray;
}

function setStyleFromWordNumber(passwordField, numberOfWords) {
  var baseSize = '40';
  var newSize = baseSize * (4/numberOfWords);
  passwordField.setAttribute('style', 'font-size: ' + newSize + 'px;');
}

function convertSecondsToReadable(seconds) {
  var timeString = '';
  var crackabilityColor = 'green';

  // Enumerate all the numbers
  var numMilliseconds = seconds * 1000;
  var numSeconds     = Math.floor(seconds);
  var numMinutes     = Math.floor(numSeconds / 60);
  var numHours       = Math.floor(numSeconds / (60 * 60));
  var numDays        = Math.floor(numSeconds / (60 * 60 * 24));
  var numYears       = Math.floor(numSeconds / (60 * 60 * 24 * 365));
  var numCenturies   = Math.floor(numSeconds / (60 * 60 * 24 * 365 * 100));

  if (numMilliseconds < 1000) {
    timeString = numMilliseconds + ' milliseconds';
  } else if (numSeconds < 60) {
    timeString = numSeconds + ' seconds';
  } else if (numMinutes < 60) {
    timeString = numMinutes + ' minutes';
  } else if (numHours < 24) {
    timeString = numHours + ' hours';
  } else if (numDays < 365) {
    timeString = numDays + ' days';
  } else if (numYears < 100) {
    timeString = numYears + ' years';
  } else {
    timeString = numCenturies + ' centuries';
  }

  return timeString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculateAndSetCrackTime() {
  var timeToCrack = zxcvbn(passwordField.value);
  var readableCrackTime = convertSecondsToReadable(timeToCrack.crack_time);
  document.querySelector('.crack-time').innerHTML = readableCrackTime;
}

var selectField = document.getElementById('passphrase_select');
var passwordField = document.getElementById('passphrase');
var separatorField = document.getElementById('separator');
var button = document.querySelector('.btn-generate');

// Initially run it upon load
var passArray = generatePassword(4); // Save array to easily change separator
passwordField.setAttribute('value', passArray.join(' '));
calculateAndSetCrackTime();

// Listen for a button click
button.addEventListener('click', function() {
  var numberOfWords = selectField.options[selectField.selectedIndex].value;
  passArray = generatePassword(numberOfWords);
  passwordField.value = passArray.join(separatorField.value);
  setStyleFromWordNumber(passwordField, numberOfWords);
  calculateAndSetCrackTime();
});

// Listen for password value change
passwordField.addEventListener('input', function (evt) {
  calculateAndSetCrackTime();
});

// Listen for separator value change
separatorField.addEventListener('input', function (evt) {
  passwordField.value = passArray.join(separatorField.value);
  calculateAndSetCrackTime();
});
