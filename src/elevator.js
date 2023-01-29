const createElevator = () => {
    return {
        currentFloor: 0
    }
}

const changeCurrentFloor = (elevator, number) => {
    elevator.currentFloor = number 
}



export { createElevator, changeCurrentFloor }