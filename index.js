const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpace = 0.8;
const startingPlants = 20;
const growthRate = 2;
const maxPlantCompacity = area / minSpace;

// First Week
const firstWeekPlantCount = startingPlants * growthRate;
const firstWeekSpace = firstWeekPlantCount * minSpace;
console.log("============First Week============");
//Check if the plant needs to be pruned
if (firstWeekSpace / area > 0.8) {
  console.log("The plant needs to be pruned");
} else if (firstWeekSpace / area >= 0.5) {
  //Check if the plant needs to be monitored
  console.log("The plant is healthy");
} else {
  console.log("Need more plants");
}

// Second Week
const secondWeekPlantCount = firstWeekPlantCount * growthRate;
const secondWeekSpace = secondWeekPlantCount * minSpace;
console.log("============Second Week============");
switch (true) {
  case secondWeekSpace / area > 0.8:
    console.log("The plant needs to be pruned");
    break;
  case secondWeekSpace / area >= 0.5:
    console.log("The plant is healthy");
    break;
  default:
    console.log("Need more plants");
    break;
}
