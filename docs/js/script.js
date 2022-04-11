const personOne = {
	name: 'Bob',
	age: 23
}

function transformAge(person) {
	person.age += 1
	return person
}

transformAge(personOne)

console.log(personOne.age)