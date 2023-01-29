import { createElevator } from '../src/elevator'

describe('Elevator', () => {

    test('should be an instance of Elevator class', () => {
        expect(createElevator()).toEqual({})
    })
})