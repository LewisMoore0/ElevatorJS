const Person =  require('../src/person.js')

describe('Person', () => {

    test('should be instance of person class', () => {
        let person = new Person()
        expect(person).toBeInstanceOf(Person)
    })

    test('should have current floor property passed in as argument', () => {
        let person = new Person(1)
        expect(person.currentFloor).toEqual(1)
    })

    test('requestElevator should change elevator current floor to match person current floor', () => {
        let person = new Person(1)
        let elevatorMock = { 'currentFloor' : 0 }
        person.requestElevator(elevatorMock)
        expect(elevatorMock.currentFloor).toEqual(1)
    })
})