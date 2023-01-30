import { createNewPerson } from "../src/person"

let person = createNewPerson(1)

describe('Person', () => {
    test('should contain a currentFloor property matching argument given', () => {
        expect(person.currentFloor).toEqual(1)
    })

    test('should contain a desiredFloor property default as 0', () => {
        expect(person.desiredFloor).toEqual(0)
    })
})