// Exercise 1.2
// ------------
const body = document.querySelector("body");
const main = document.getElementById("main");
const buttons = document.querySelector("button");

// CSS Link

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "../css/exercise-2.3.css";
document.head.appendChild(cssLink);

// Click (Many Buttons)

const buttonNumber = 20;

for(index = 1; index <= buttonNumber; index++){
    const createButton = document.createElement("button");
    const randomInstance = randomNumberGen(700);
    const randomInstance2 = randomNumberGen(1500);
    createButton.id = `Button #${index}`;
    createButton.className = "Buttons"
    createButton.innerText = index
    createButton.style.position = "absolute";
    createButton.style.top = `${randomInstance}px`;
    createButton.style.left = `${randomInstance2}px`;
    main.appendChild(createButton);
}

const nontoggleclick = (event) => {
    const buttonSelected = event.target.id;
    const buttonSelectedID = document.getElementById(buttonSelected);
    buttonSelectedID.classList.toggle("green");
}

function randomNumberGen(size){
    return Math.floor(Math.random() * size) + 1;
}

main.addEventListener("click", nontoggleclick);