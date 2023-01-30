import { changeCurrentFloor } from "./elevator"

const callElevator = (elevator, person) => {
    changeCurrentFloor(elevator, person.currentFloor)
}

export { callElevator }