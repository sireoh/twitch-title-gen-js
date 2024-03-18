const emojiArray = emojis.split("\n")
const wordArray = words.split("\n")
var i = 0;
var text = "";

function scanOption() {
  let scan = prompt("1: generate\t2: mic off\n3: custom");
  return scan;
}

function scanTitle() {
  let scan = prompt("Custom Title: ");
  return scan;
}

function randomWord() {
  let min = 0;
  let max = wordArray.length-1;
  let i = Math.floor(Math.random() * (max - min + 1)) + min;
  return wordArray[i];
}

function randomEmoji() {
  let min = 0;
  let max = emojiArray.length-1;
  let i = Math.floor(Math.random() * (max - min + 1)) + min;
  return emojiArray[i];
}

function printWords() {
  let wordout = "";
  let max = 2;
  for(let w = 0; w < max; w++) {
    wordout += randomWord() + " ";
  }
  wordout += randomWord();
  return wordout;
}

function printEmojis() {
  let emojiout = "";
  let max = 3;
  for(let w = 0; w < max; w++) {
    emojiout += randomEmoji();
  }
  return emojiout;
}

function changeTitle() {
  let option = scanOption();
  /*
  * Option 1: default.
  * Option 2: [mic off] hello world.
  * Option 3: custom.
  */
  switch(option) {
    case "1":
      document.getElementById("text").innerHTML = printWords() + " " + printEmojis();
      break;

    case "2":
      document.getElementById("text").innerHTML = `[mic off] ${printWords()} ${printEmojis()}`;
      break;
    
    case "3":
      document.getElementById("text").innerHTML = scanTitle() + " " + printEmojis();
      break;
  };
}

changeTitle();1