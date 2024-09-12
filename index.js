const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpace = 0.8;
const startingPlants = 20;
const growthRate = 2;
const maxPlantCompacity = area / minSpace;

console.log("Total Area: ", area);

// Part 1: Growing Pains
// First Week
const firstWeekPlantCount = startingPlants * growthRate;
const firstWeekSpace = firstWeekPlantCount * minSpace;
const firstWeekSpaceTaken = firstWeekSpace / area;

console.log("============Part 1============");
console.log("============First Week============");
//Check if the plant needs to be pruned
if (firstWeekSpace / area > 0.8) {
  console.log("The plant needs to be pruned");
  console.log("Space taken: " + firstWeekSpaceTaken * 100 + "%");
} else if (firstWeekSpace / area >= 0.5) {
  //Check if the plant needs to be monitored
  console.log("The plant is healthy");
  console.log("Space taken: " + firstWeekSpaceTaken * 100 + "%");
} else {
  console.log("Need more plants");
  console.log("Space taken: " + firstWeekSpaceTaken * 100 + "%");
}

// Second Week
const secondWeekPlantCount = firstWeekPlantCount * growthRate;
const secondWeekSpace = secondWeekPlantCount * minSpace;
const secondWeekSpaceTaken = secondWeekSpace / area;
console.log("============Second Week============");

switch (true) {
  case secondWeekSpace / area > 0.8:
    console.log("The plant needs to be pruned");
    console.log("Space taken: " + secondWeekSpaceTaken * 100 + "%");
    break;
  case secondWeekSpace / area >= 0.5:
    console.log("The plant is healthy");
    console.log("Space taken: " + secondWeekSpaceTaken * 100 + "%");
    break;
  default:
    console.log("Need more plants");
    console.log("Space taken: " + secondWeekSpaceTaken * 100 + "%");
    break;
}

// Third Week
const thirdWeekPlantCount = secondWeekPlantCount * growthRate;
const thirdWeekSpace = thirdWeekPlantCount * minSpace;
const thirdWeekSpaceTaken = thirdWeekSpace / area;
console.log("============Third Week============");

switch (true) {
  case thirdWeekSpace / area > 0.8:
    console.log("The plant needs to be pruned");
    console.log("Space taken: " + thirdWeekSpaceTaken * 100 + "%");
    break;
  case thirdWeekSpace / area >= 0.5:
    console.log("The plant is healthy");
    console.log("Space taken: " + thirdWeekSpaceTaken * 100 + "%");
    break;
  default:
    console.log("Need more plants");
    console.log("Space taken: " + thirdWeekSpaceTaken * 100 + "%");
    break;
}

console.log("============Part 2============");
// Part 2: Thinking Bigger
let plantCount = 100;
let loop = true;
let weekCount = 0;
let space = 0;
let radiusPart2 = 0;
while (loop) {
  plantCount = plantCount * 2;
  weekCount++;
  //   console.log("============Week " + weekCount + "============");
  //   console.log("Plant count: " + plantCount);
  //   console.log("Space taken: " + plantCount * minSpace);
  if (weekCount === 10) {
    loop = false;
    space = plantCount * minSpace;
  }
}
radiusPart2 = Math.sqrt(space / PI);

console.log(
  "The radius of the expanded circular garden should be: ",
  radiusPart2.toFixed(1) + "m"
);
