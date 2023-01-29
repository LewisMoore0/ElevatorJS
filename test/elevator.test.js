import { createElevator } from '../src/elevator'

describe('Elevator', () => {

    test('should be an instance of Elevator class', () => {
        expect(createElevator()).toEqual({
            currentFloor: 0
        })
    })

    test('should be initialised with a currentFloor value of 0', () => {
        let elevator = createElevator()
        expect(elevator.currentFloor).toEqual(0)
    })
})