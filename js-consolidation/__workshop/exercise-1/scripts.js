let yearDisplay = document.getElementById("fadedYear");
let firstYearButton = document.getElementById("2018");
let secondYearButton = document.getElementById("2019");
let foodDisplayNum = document.getElementById("foodDisplayNum");
let foodDisplayItem = document.getElementById("foodDisplayItem");
let hideMe = document.getElementById("before");
let numbers = Array.from(document.getElementsByClassName("numbers"));
let yearClicked = "2018";
let numSelected = 1;
let background = document.getElementById("background");

console.log(numbers);

firstYearButton.addEventListener("click", firstYearClicked);
secondYearButton.addEventListener("click", secondYearClicked);

window.onload = itemsOnLoad;

function itemsOnLoad() {
    foodDisplayNum.style.display = "none";
    foodDisplayItem.style.display = "none";
    background.style.minHeight = "333px";
    firstYearClicked();
}

function firstYearClicked() {
    yearClicked = "2018";
    firstYearButton.style.backgroundColor = "var(--ksu-purple)";
    firstYearButton.style.color = "white";
    secondYearButton.style.backgroundColor = "transparent";
    secondYearButton.style.color = "var(--ksu-purple)";
    yearDisplay.innerText = "2018";
}

function secondYearClicked() {
    yearClicked = "2019";
    secondYearButton.style.backgroundColor = "var(--ksu-purple)";
    secondYearButton.style.color = "white";
    firstYearButton.style.backgroundColor = "transparent";
    firstYearButton.style.color = "var(--ksu-purple)";
    yearDisplay.innerText = "2019";
}

numbers.forEach((num, index) => {
num.addEventListener("mouseover", (ev) => {
    foodDisplayNum.innerText = ev.target.innerText;
    foodDisplayItem.innerText = topTenList[yearClicked][index].name;
    foodDisplayNum.style.display = "block";
    foodDisplayItem.style.display = "block";
    hideMe.style.display = "none";
});
});