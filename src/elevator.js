const createElevator = () => {
    return {
        currentFloor: 0,
        numberOfPeople: []
    }
}

const changeCurrentFloor = (elevator, number) => {
    elevator.currentFloor = number 
}


export { createElevator, changeCurrentFloor }