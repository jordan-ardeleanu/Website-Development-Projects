// Exercise 1.1
// ------------

const body = document.querySelector("body");
const result = document.getElementById("result");

// CSS Link

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "../css/exercise-1.1.css";
document.head.appendChild(cssLink);

// Click (Timed)

let outcome;
body.addEventListener(`click`, superHands);
let timeout = setTimeout(timeOut, 1000);

function timeOut(){
    body.removeEventListener(`click`, superHands);
    clearTimeout(timeout);
    if(!outcome){
        result.innerText = "You lose!";
    }
}
function superHands(){
        result.innerText = "You win!";
        outcome = true;
}

