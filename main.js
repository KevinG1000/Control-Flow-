const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
let plantCount = 20;

const maxCapacity = area/ spacePerPlant;
const roundedCapacity = Math.floor(maxCapacity)

const weeks = 3;
const futurePlantCount = plantCount * Math.pow(2, weeks)

const capacity80 = roundedCapacity * 0.8;
const capacity50 = roundedCapacity * 0.5;

if (futurePlantCount >= capacity80) {
    console.log ("Prune the plants");
} else if (futurePlantCount >= capacity50) {
    console.log ("Monitor the growth.");
} else {
    console.log ("Plant more plants.")
}

// Week 1 const code results = "Plant more plants."
// Week 2 const code results = "Prune the plants."
// Week 3 const code results = "Prune the plants."




// Part 2, Thinking Bigger.

