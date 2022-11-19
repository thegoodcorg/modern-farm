export const harvestPlants = (plantArr) => {
    let harvested = []
    for (const plant of plantArr)
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                harvested.push(plant)
            }
        }
        else for (let i = 0; i < plant.output; i++) {
            harvested.push(plant)
        }

   

    return harvested
}
