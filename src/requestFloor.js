const requestFloor = async (elevator, person) => {
    console.log(`Elevator at floor ${elevator.currentFloor} going to floor ${person.desiredFloor}` )
    try { 
        await setTimeout(() => {
            console.log(`Elevator arrived at floor ${person.desiredFloor}`)
        }, 5000)
        elevator.currentFloor = person.desiredFloor
    } catch (err) {

    }
}

export { requestFloor }