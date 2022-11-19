console.log("Welcome to the main module")
import { catalog } from "./catalog.js"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { usePlants } from "./field.js"
import { addPlant } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

const yearlyPlan = createPlan()
// console.log(yearlyPlan)
const field = plantSeeds(yearlyPlan)

console.log(usePlants())
let harvest = harvestPlants(usePlants())
const parentHTMLElement = document.querySelector(".container")

parentHTMLElement.innerHTML = catalog(harvest)

console.log(catalog(harvest))
