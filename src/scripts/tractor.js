import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { usePlants } from "./field.js"
import { addPlant } from "./field.js"




export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for(const seed of row){
            if (seed === "Asparagus") {
                addPlant(createAsparagus())
            }
            if (seed === "Corn") {
                addPlant(createCorn())
            }
            if (seed === "Potato") {
                addPlant(createPotato())
            }
            if (seed === "Soybean") {
                addPlant(createSoybean())
            }
            if (seed === "Sunflower") {
                addPlant(createSunflower())
            }
            if (seed === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
}