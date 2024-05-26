const emojiArray = emojis.split("\n")
const wordArray = words.split("\n")

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

function customTitle() {
  let custom = prompt("custom: ");
  /*
  * OK: mic on.
  * Cancel: mic off.
  */
  switch(prompt("OK: mic on\nCancel: mic off", "1")) {
    case "1":
      $("#text").html(`[mic on] ${custom} ${printEmojis()}`);
      break;

    default:
      $("#text").html(`[mic off] ${custom} ${printEmojis()}`);
      break;
  };
}

function changeTitle() {
  /*
  * OK: default.
  * Cancel: [mic off] hello world.
  * Option 2: custom.
  */
  switch(prompt("OK: default\tCancel: no mic\t\n2: custom", "1")) {
    case "1":
      $("#text").html(`[mic on] ${printWords()} ${printEmojis()}`);
      break;
    
    case "2":
      customTitle();
      break;

    default:
      $("#text").html(`[mic off] ${printWords()} ${printEmojis()}`);
      break;
  };
}

$(document).ready(() => {
  changeTitle();
  $("body").on("click", changeTitle);
});