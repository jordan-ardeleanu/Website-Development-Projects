// Exercise 1.2
// ------------
const body = document.querySelector("body");
const main = document.getElementById("main");
const buttons = document.querySelector("#Buttons");

// CSS Link

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "../css/exercise-2.1.css";
document.head.appendChild(cssLink);

// Click (Many Buttons)

const buttonNumber = 20;

for(index = 1; index <= buttonNumber; index++){
    const createButton = document.createElement("button");
    createButton.id = `Button #${index}`;
    createButton.className = "Buttons"
    createButton.innerText = index
    main.appendChild(createButton);
}

const nontoggleclick = (event) => {
    const buttonSelected = event.target.id;
    const buttonSelectedID = document.getElementById(buttonSelected);
    buttonSelectedID.classList.add("green");
}

main.addEventListener("click", nontoggleclick);

