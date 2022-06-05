const Person =  require('../src/person.js')

describe('Person', () => {

    test('should be instance of person class', () => {
        let person = new Person()
        expect(person).toBeInstanceOf(Person)
    })
})