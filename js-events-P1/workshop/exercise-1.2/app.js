// Exercise 1.2
// ------------
const body = document.querySelector("body");
const result = document.getElementById("result");
const update = document.getElementById("time");

// CSS Link

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "../css/exercise-1.2.css";
document.head.appendChild(cssLink);

// Click (Countdown)

let outcome;
let randomNumber = Math.floor(Math.random() * 10) + 1;
update.innerText = randomNumber;
body.addEventListener("mousedown", win);
let ohNo = setTimeout(timeOut, randomNumber * 1000);

function timeOut(){
    body.removeEventListener("mousedown", win);
    if(!outcome){
        result.innerText = "You lose!";
    }
    clearTimeout(timeout);
    console.log("yo");
}
function win(){
        result.innerText = "You win!";
        outcome = true;
}