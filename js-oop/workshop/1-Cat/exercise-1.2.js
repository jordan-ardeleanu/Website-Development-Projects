// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, boots' name is not part of its object.
// Update the Cat class to have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you create the boots Cat class object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

class Cat {
    constructor(name, breed) {
        this.species = 'cat';
        this.tiredness = 0;
        this.hunger = 0;
        this.lonliness = 0;
        this.happiness = 0;
        this.name = name;
        this.breed = breed;
    }
}

let boots = new Cat('Boots', 'Siamese');
console.log(boots);

// By the way, Boots is a Simaese cat...

// Cat {species: "cat", tiredness: 0, hunger: 0, lonliness: 0, happiness: 0, …}
// breed: "Siamese"
// happiness: 0
// hunger: 0
// lonliness: 0
// name: "Boots"
// species: "cat"
// tiredness: 0