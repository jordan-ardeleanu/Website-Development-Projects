// Exercise 1.0
// ------------

const body = document.querySelector("body");

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "../css/exercise-1.0.css";
document.head.appendChild(cssLink);

let outcome = false;
const textChange = document.createElement("p");

body.addEventListener("click", () => {
    textChange.innerText = "You win!";
    body.appendChild(textChange);
})

console.log('exercise-1'); 