export default class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return `Hello! My name is ${this.name}`;
	}

}
