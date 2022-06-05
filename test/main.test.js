const Elevator = require("../src/main.js")

describe('Elevator', () => {

    test('should be an instance of Elevator class', () => {
        let elevator = new Elevator()
        expect(elevator).toBeInstanceOf(Elevator)
    })
})