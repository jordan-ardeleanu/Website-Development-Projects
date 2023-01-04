// Preset values
const FROGS = 3;
// Stored Refrences
const track = document.getElementById("track");

// Exercise 1.1

for (let count = 1; count <= FROGS; count++) {
    const lane = document.createElement("li");
    lane.id = `lane-${count}`;
    const span = document.createElement("span");
    span.innerText = count;
    track.appendChild(lane);
    lane.appendChild(span);
}

// Exercise 1.2

let racers = [];

for (let count = 1; count <= FROGS; count++) {
    racers.push(frogstable[count]);
}

// console.log(racers);

// Exercise 1.3 & 1.4

racers.forEach((racer, slot) => {
    const lane = document.getElementById(`lane-${slot+1}`);
    const name = document.createElement("span");
    const number = document.createElement("span");
    // span.innerText = `${racer.name} (${racer.number})`
    name.innerText = racer.name;
    number.innerText = racer.number;
    name.className = "frog-name";
    number.className = "frog";
    number.style.backgroundColor = racer.color;
    lane.appendChild(name);
    lane.appendChild(number);
    // Exercise 1.5
    racer.progress = 0;
    racer.lane = `lane-${slot+1}`;
})

// Exercise 1.6

const trackWidth = track.offsetWidth;
const completedFrog = [];

const hop = setInterval(() => {
    racers.forEach((racer) => {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress += hopLength;
        if(completedFrog.includes(racer.name)){
            // Completed
        }
        else if(racer.progress >= 100 && !completedFrog.includes(racer.name)){
            console.log(`${racer.name} has finished!`);
            completedFrog.push(racer.name);
        }else
        {
        console.log(`${racer.name} is at ${racer.progress}`);
        }
    })
}, 1000);

const racingFrog = (racer) => {
    // console.log("racingFrog() ", racer);
}

racers.forEach((racer) => {
    racingFrog(racer);
})





