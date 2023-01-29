const createElevator = () => {
    return {
        currentFloor: 0,
        numberOfPeople: 0
    }
}

const changeCurrentFloor = (elevator, number) => {
    elevator.currentFloor = number 
}

const addPeopleToElevator = (elevator, number) => {
    elevator.numberOfPeople = number
}



export { createElevator, changeCurrentFloor,addPeopleToElevator }