console.log('#4-----------')
var name = 'Vic 2';
var user = {
	age: 5,
	name: 'Vic',
	getName: function () {
		return this.name;
	}
};

const getName = user.getName.bind(user);
console.log(getName())
// + 2 возможных варианта решения
// const getName = user.getName.call(user);
// console.log(getName)
// const getName = user.getName.apply(user);
// console.log(getName)

console.log('#5-----------')

const user1 = {
	age: 5,
	name: 'Vic',
	getNameSecond: function () {
		return this.name;
	}
};
const user2 = {
	name: 'Arni',
}

const getNameSecond = user1.getNameSecond.apply(user2);
console.log(getNameSecond)
// + 2 возможных варианта решения
// const getNameSecond = user1.getNameSecond.call(user2);
// console.log(getNameSecond)
// const getNameSecond = user1.getNameSecond.bind(user2);
// console.log(getNameSecond())