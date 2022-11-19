
// array of items thatare growing in the field.
let growing = []

//function to add a plant to the field array





export const addPlant = (seedIn) => {
    if(Array.isArray(seedIn) === false){
        growing.push(seedIn)
    }
    if(Array.isArray(seedIn)=== true){
        for(const seed of seedIn){
            growing.push(seed)
        }
    }
}

// function to call the field array 
export const usePlants = () => growing