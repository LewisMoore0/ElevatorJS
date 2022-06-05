class Person {
    constructor(currentFloor) {
        this.currentFloor = currentFloor
    }

    requestElevator(elevator) {
        elevator.currentFloor = this.currentFloor
    }
}

module.exports = Person;