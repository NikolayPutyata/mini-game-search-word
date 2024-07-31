import getRandomWord from "./get-random-word.js";

const words = {
  fruits: [
    { word: "apple", hint: "A fruit that keeps the doctor away." },
    { word: "banana", hint: "A long yellow fruit." },
    { word: "orange", hint: "A round citrus fruit." },
    { word: "grape", hint: "A small round fruit, often purple or green." },
    { word: "kiwi", hint: "A small brown fruit with green flesh inside." },
    {
      word: "pear",
      hint: "A sweet fruit with a rounded base and tapering top.",
    },
    {
      word: "peach",
      hint: "A juicy fruit with a fuzzy skin and a central pit.",
    },
    {
      word: "pineapple",
      hint: "A tropical fruit with spiky skin and sweet flesh.",
    },
    { word: "strawberry", hint: "A red fruit with tiny seeds on its surface." },
    {
      word: "blueberry",
      hint: "A small, round, blue fruit often used in desserts.",
    },
    { word: "mango", hint: "A tropical fruit with sweet, orange flesh." },
    {
      word: "watermelon",
      hint: "A large fruit with green rind and red, juicy interior.",
    },
    {
      word: "pomegranate",
      hint: "A fruit with a tough outer skin and many seeds inside.",
    },
    { word: "plum", hint: "A fruit with a smooth skin and a central pit." },
    {
      word: "cherry",
      hint: "A small, round fruit that is usually red or black.",
    },
  ],
  furniture: [
    { word: "chair", hint: "A piece of furniture you sit on." },
    { word: "table", hint: "A flat surface with legs." },
    { word: "sofa", hint: "A comfortable seat for multiple people." },
    { word: "bed", hint: "A piece of furniture for sleeping." },
    { word: "cabinet", hint: "A piece of furniture with shelves for storage." },
    { word: "dresser", hint: "A piece of furniture for storing clothes." },
    { word: "stool", hint: "A seat without arms or a back." },
    {
      word: "armchair",
      hint: "A comfortable chair with side supports for the arms.",
    },
    { word: "bookshelf", hint: "A piece of furniture for holding books." },
    { word: "ottoman", hint: "A padded seat or footstool." },
    {
      word: "coffee table",
      hint: "A low table typically placed in front of a sofa.",
    },
    { word: "nightstand", hint: "A small table beside a bed." },
    { word: "wardrobe", hint: "A tall cupboard for hanging clothes." },
    {
      word: "bench",
      hint: "A long seat for multiple people, usually outdoors.",
    },
    {
      word: "console",
      hint: "A small table or cabinet, often used for decorative purposes.",
    },
  ],
  nature: [
    { word: "tree", hint: "A tall plant with a trunk and branches." },
    { word: "river", hint: "A large flowing body of water." },
    {
      word: "mountain",
      hint: "A large natural elevation of the earth's surface.",
    },
    { word: "desert", hint: "A dry, barren area with little rainfall." },
    {
      word: "forest",
      hint: "A large area covered chiefly with trees and undergrowth.",
    },
    { word: "lake", hint: "A large body of water surrounded by land." },
    {
      word: "ocean",
      hint: "A vast body of saltwater that covers much of the earth.",
    },
    { word: "valley", hint: "A low area of land between hills or mountains." },
    {
      word: "canyon",
      hint: "A deep gorge, typically with a river flowing through it.",
    },
    { word: "island", hint: "A piece of land surrounded by water." },
    {
      word: "hill",
      hint: "A naturally raised area of land, smaller than a mountain.",
    },
    {
      word: "rainforest",
      hint: "A dense forest with high rainfall and diverse species.",
    },
    { word: "glacier", hint: "A large, slow-moving mass of ice." },
    { word: "meadow", hint: "A field of grass and wildflowers." },
    {
      word: "wetland",
      hint: "An area where water covers the soil or is present near the surface.",
    },
  ],
  technology: [
    { word: "computer", hint: "An electronic device for processing data." },
    {
      word: "smartphone",
      hint: "A handheld device that combines mobile phone and computing functions.",
    },
    {
      word: "tablet",
      hint: "A portable touchscreen device that is larger than a smartphone.",
    },
    { word: "camera", hint: "Device used to take photographs." },
    {
      word: "headphones",
      hint: "Devices worn on or over the ears to listen to audio.",
    },
    {
      word: "laptop",
      hint: "A portable computer that can be used on your lap.",
    },
    {
      word: "printer",
      hint: "A device that produces paper copies of digital documents.",
    },
    {
      word: "router",
      hint: "A device that forwards data packets between computer networks.",
    },
    {
      word: "monitor",
      hint: "A screen used to display the output of a computer.",
    },
    {
      word: "keyboard",
      hint: "An input device used to type letters and numbers.",
    },
    {
      word: "mouse",
      hint: "An input device used to interact with a computer screen.",
    },
    {
      word: "speaker",
      hint: "A device that produces sound from electronic signals.",
    },
    {
      word: "microphone",
      hint: "A device that converts sound into electrical signals.",
    },
    {
      word: "webcam",
      hint: "A camera that streams live video over the internet.",
    },
    {
      word: "smartwatch",
      hint: "A wearable device that performs various functions like a phone.",
    },
  ],
  transport: [
    {
      word: "car",
      hint: "A vehicle with four wheels that carries passengers.",
    },
    { word: "bike", hint: "A two-wheeled vehicle that you pedal." },
    { word: "bus", hint: "A large vehicle that carries many passengers." },
    { word: "boat", hint: "A vehicle used for traveling on water." },
    { word: "train", hint: "A vehicle that runs on rails." },
    { word: "plane", hint: "A vehicle that flies in the sky." },
    {
      word: "scooter",
      hint: "A small vehicle with two wheels and a platform.",
    },
    { word: "motorcycle", hint: "A two-wheeled motor vehicle." },
    {
      word: "helicopter",
      hint: "A vehicle with rotating blades that can fly vertically.",
    },
    { word: "submarine", hint: "A vessel that can operate underwater." },
    { word: "taxi", hint: "A car that transports passengers for a fee." },
    { word: "tram", hint: "A vehicle that runs on tracks within a city." },
    {
      word: "ferry",
      hint: "A boat that carries passengers and vehicles across water.",
    },
    {
      word: "hot air balloon",
      hint: "A large balloon filled with hot air that can carry passengers.",
    },
    { word: "cargo ship", hint: "A large ship used for transporting goods." },
  ],
  household: [
    { word: "broom", hint: "A tool for sweeping floors." },
    { word: "vacuum", hint: "A device used for cleaning floors and carpets." },
    { word: "toaster", hint: "A kitchen appliance for toasting bread." },
    { word: "microwave", hint: "An appliance used for heating food quickly." },
    { word: "fridge", hint: "An appliance for keeping food cold." },
    {
      word: "oven",
      hint: "A kitchen appliance used for baking or roasting food.",
    },
    { word: "dishwasher", hint: "A machine for washing dishes automatically." },
    {
      word: "blender",
      hint: "A kitchen appliance for mixing or pureeing food.",
    },
    { word: "kettle", hint: "A device for boiling water." },
    { word: "iron", hint: "A device for pressing clothes to remove wrinkles." },
    { word: "lamp", hint: "A device that provides light." },
    { word: "clock", hint: "A device used to tell time." },
    { word: "washer", hint: "A machine for washing clothes." },
    { word: "dryer", hint: "A machine for drying clothes after washing." },
    { word: "rug", hint: "A piece of fabric used to cover part of a floor." },
  ],
  hobbies: [
    { word: "painting", hint: "The act of creating art using paint." },
    {
      word: "gardening",
      hint: "The practice of growing and cultivating plants.",
    },
    {
      word: "knitting",
      hint: "A craft of making fabric by interlocking yarn.",
    },
    { word: "cooking", hint: "The act of preparing food." },
    {
      word: "photography",
      hint: "The art of taking and processing photographs.",
    },
    {
      word: "reading",
      hint: "The act of looking at and understanding written words.",
    },
    { word: "hiking", hint: "Walking long distances in natural environments." },
    {
      word: "baking",
      hint: "The process of cooking food by dry heat in an oven.",
    },
    { word: "writing", hint: "The act of creating text." },
    {
      word: "cycling",
      hint: "Riding a bicycle for exercise or transportation.",
    },
    {
      word: "drawing",
      hint: "The act of creating images with pencils or pens.",
    },
    {
      word: "singing",
      hint: "The act of producing musical sounds with the voice.",
    },
    {
      word: "playing guitar",
      hint: "The act of producing music using a stringed instrument.",
    },
    { word: "sculpting", hint: "The art of creating three-dimensional forms." },
    {
      word: "playing chess",
      hint: "A strategic board game played on a checkered board.",
    },
  ],
};

const startButton = document.querySelector(".start-button");
const form = document.querySelector("#form");
const container = document.querySelector(".container");
const hint = document.querySelector(".hint");
const livesCounterHtml = document.querySelector(".lives-span");
const welcomeDiv = document.querySelector(".welcome-div");
const selectDiv = document.querySelector(".category-selection");

startButton.addEventListener("click", startGameFu);
form.addEventListener("submit", checkWordFu);

let mainWordArray = null;
let livesCounter = 3;

function startGameFu(event) {
  event.preventDefault();

  form.style.display = "flex";
  startButton.style.display = "none";
  welcomeDiv.style.display = "none";

  container.innerHTML = "";
  livesCounterHtml.innerHTML = livesCounter;
  const livesDiv = document.querySelector(".lives");
  livesDiv.style.display = "flex";
  selectDiv.style.display = "none";

  const selectedCategory = document.querySelector("#category").value;
  const categoryWords = words[selectedCategory];
  const randomWordObj = getRandomWord(categoryWords);
  const randomWord = randomWordObj.word;

  const randomWordinArray = randomWord.split("");
  mainWordArray = randomWordinArray;

  const newBoxesHtmlCode = randomWordinArray
    .map(
      (oneLetter) =>
        `<div class="box no-select">${oneLetter.toUpperCase()}</div>`
    )
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
