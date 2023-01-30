import { createElevator } from "../src/elevator"
import { createNewPerson } from "../src/person"
import { callElevator } from "../src/callElevator"

describe('callElevator', () => {
    test('should change elevator current floor property to person current floor', () => {
        let elevator = createElevator(0)
        let person = createNewPerson(1)

        callElevator(elevator, person)
        expect(person.currentFloor).toEqual(elevator.currentFloor)
    })

    test('should add person object to elevator.numberOfPeople array', () => {
        let elevator = createElevator()
        let person = createNewPerson(1)

        callElevator(elevator, person)
        expect(elevator.numberOfPeople).toEqual([ person ])
    })
})