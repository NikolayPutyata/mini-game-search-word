const words = [
  { word: "apple", hint: "A fruit that keeps the doctor away." },
  { word: "chair", hint: "A piece of furniture you sit on." },
  { word: "table", hint: "A flat surface with legs." },
  { word: "house", hint: "A building where people live." },
  { word: "light", hint: "What you need to see in the dark." },
  { word: "water", hint: "A clear liquid essential for life." },
  { word: "happy", hint: "A feeling of joy and contentment." },
  { word: "clock", hint: "Tells you the time of day." },
  { word: "grass", hint: "Green plant that covers the ground." },
  { word: "bread", hint: "A staple food made from flour and water." },
  { word: "plane", hint: "A vehicle that flies in the sky." },
  { word: "storm", hint: "Severe weather with thunder and rain." },
  { word: "train", hint: "A vehicle that runs on tracks." },
  { word: "smart", hint: "Being clever and intelligent." },
  { word: "phone", hint: "A device used for communication." },
  { word: "shoes", hint: "Footwear you put on your feet." },
  { word: "fruit", hint: "A sweet product of a tree or plant." },
  { word: "socks", hint: "Worn on your feet, usually in pairs." },
  { word: "glove", hint: "Worn on the hand for warmth or protection." },
  { word: "train", hint: "A vehicle that runs on rails." },
  { word: "paint", hint: "Colored liquid used for decorating surfaces." },
  { word: "brush", hint: "Tool used for painting or cleaning." },
  { word: "baker", hint: "Person who makes bread and pastries." },
  { word: "books", hint: "Bound collections of pages with text." },
  { word: "shoes", hint: "Footwear to protect and comfort feet." },
  { word: "beach", hint: "Sandy area by the sea." },
  { word: "light", hint: "Makes things visible and bright." },
  { word: "knife", hint: "Sharp utensil used for cutting." },
  { word: "music", hint: "Art form using sound and rhythm." },
  { word: "plant", hint: "Living organism that grows in soil." },
  { word: "cloud", hint: "Mass of water vapor in the sky." },
  { word: "river", hint: "A large flowing body of water." },
  { word: "camera", hint: "Device used to take photographs." },
  { word: "dream", hint: "Thoughts or images during sleep." },
];

const startButton = document.querySelector(".start-button");
const form = document.querySelector("#form");
const container = document.querySelector(".container");
const hint = document.querySelector(".hint");
const boxes = document.querySelectorAll(".box");
const livesCounterHtml = document.querySelector(".lives-span");
const welcomeDiv = document.querySelector(".welcome-div");

startButton.addEventListener("click", startGameFu);
form.addEventListener("submit", checkWordFu);

let mainWordArray = null;
let livesCounter = 3;
let userLives = 3;

function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
function startGameFu(event) {
  event.preventDefault();

  form.style.display = "flex";
  startButton.style.display = "none";
  welcomeDiv.style.display = "none";

  container.innerHTML = "";
  livesCounterHtml.innerHTML = livesCounter;
  const livesDiv = document.querySelector(".lives");
  livesDiv.style.display = "flex";

  const randomWordObj = getRandomWord(words);
  const randomWord = randomWordObj.word;

  const randomWordinArray = randomWord.split("");
  mainWordArray = randomWordinArray;

  const newBoxesHtmlCode = randomWordinArray
    .map((oneLetter) => `<div class="box">${oneLetter.toUpperCase()}</div>`)
    .join("");

  container.insertAdjacentHTML("beforeend", newBoxesHtmlCode);

  hint.textContent = randomWordObj.hint;
}
function checkWordFu(event) {
  event.preventDefault();

  const userWord = event.target.elements[0].value;
  let isLetterFind = false;

  if (userWord.trim() === "") {
    alert("Enter some letter!");
    return;
  }

  mainWordArray.forEach((oneLetter, index) => {
    if (oneLetter.toLowerCase() === userWord.toLowerCase()) {
      const boxes = document.querySelectorAll(".box");
      boxes[index].style.color = "black";
      isLetterFind = true;
    }
  });

  if (isLetterFind) {
    console.log(`Letter ${userWord} found!`);
  } else {
    livesCounter -= 1;
    livesCounterHtml.innerHTML = livesCounter;
    console.log(`Letter ${userWord} not found.`);
  }

  checkWin();

  form.reset();
}
function checkWin() {
  const allLettersRevealed = Array.from(
    document.querySelectorAll(".box")
  ).every((box) => box.style.color === "black");

  if (allLettersRevealed) {
    alert("Congratulations, you won!");
    location.reload(true);
  } else if (livesCounter === 0) {
    alert(`You lose! Try again!`);
    location.reload(true);
  }
}
