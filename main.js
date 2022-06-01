var words = [
  'wolf',
  'planet',
  'palm',
  'island',
  'cat',
  'dog',
  'book',
  'lemon',
  'meat',
  'milk',
  'tiger',
  'sun',
  'sand',
  'ground'
];

var random = Math.floor(Math.random() * words.length);
var randomWord = words[random];
var wordLength = randomWord.length;
var remainingLetters = wordLength;
var attempts = wordLength * 2;

var answerArray = [];
for (var i = 0; i < wordLength; i++) {
  answerArray[i] = '_';
};

while (remainingLetters > 0) {
  alert(answerArray.join(' '));

  var guess = prompt('Write your letter here. You have ' + attempts + ' attempts to guess hiden word. If you want to end the game, push the Cancel button');

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Please, write one letter');
  } else {
    attempts--;
    guess = guess.toLowerCase();
    for (var j = 0; j < wordLength; j++) {
      if (guess === randomWord[j] && answerArray[j] === '_') {
        answerArray[j] = guess;
        remainingLetters--;
      };
    };
  };
};
if (attempts > 0) {
  alert('Good job! Hidden word really was ' + randomWord.toUpperCase());
} else {
  alert('Too bad. Try your luck next time');
};
