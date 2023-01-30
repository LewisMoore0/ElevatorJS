import { changeCurrentFloor } from "./elevator"

const callElevator = (elevator, person) => {
    changeCurrentFloor(elevator, person.currentFloor)
    updateElevatorNumberOfPeople(elevator, person)
}

const updateElevatorNumberOfPeople = (elevator, person) => {
    return elevator.numberOfPeople.push(person)
}

export { callElevator }