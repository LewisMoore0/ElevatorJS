import { createElevator, changeCurrentFloor } from '../src/elevator'

describe('Elevator', () => {

    test('should have a default currentFloor and numberOfPeople props', () => {
        expect(createElevator()).toEqual({
            currentFloor: 0,
            numberOfPeople: []
        })
    })

    test('should be initialised with a currentFloor value of 0', () => {
        let elevator = createElevator()
        expect(elevator.currentFloor).toEqual(0)
    })

    test('should change currentFloor value when changeFloor is called', () => {
        let elevator = createElevator()
        changeCurrentFloor(elevator, 1)
        expect(elevator.currentFloor).toEqual(1)
    })
})