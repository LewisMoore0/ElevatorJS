import { requestFloor } from "../src/requestFloor"
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('requestFloor', () => {
    test('should change elevator currentFloor to person desiredFloor', async () => {
        let person = {
            currentFloor: 0,
            desiredFloor: 1
        }
        let elevator = {
            currentFloor: 0,
            numberOfPeople: [ person ]
        }

        await requestFloor(elevator, person)
        expect(elevator.currentFloor).toEqual(person.desiredFloor)
    })
})