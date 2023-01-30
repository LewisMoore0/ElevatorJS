import { createNewPerson } from "../src/person"

describe('Person', () => {
    test('should contain a currentFloor property matching argument given', () => {
        let person = createNewPerson(1)
        expect(person.currentFloor).toEqual(1)
    })
})