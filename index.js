//function declaration

// function sayHello(name) {
//     console.log(name);
// }
// sayHello("Dana");

// //function expression

// const sayGoodbye = function () {
//     console.log("goodbye");
// }

// sayGoodbye();


//arrow functions with ES6

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(getFullName("Dana", "Pughakoff"));

// const moniker = "dana";
// const age = 5;
// const person = {
//     moniker,
//     age,

// };

// console.log(person.moniker, person.age);
// const details = document.createElement('li')
// details.innerText = person.moniker + "- age: " + person.age;
// const head = document.querySelector('#head');
// console.log(head)
// head.append(details);

// const names = ["Aysan", "Cernan", "Avi", "Gregg"];
// const updatedNames = [...names, "Jojo", "Hobag"];
// const newNames = ["Sven", "Johannes", "Wolfgang Amadeus", "Beeth-oven", ...names]
// console.log(newNames);
// console.log(names);
// console.log(updatedNames);
// 
//Classes and Constructors-

//Person factory//
class Menu {
	constructor(item, description, price) {
	this.item = item;
	this.description = description;
    this.price = price;
	}
    addDivData() {
        return `
        <div>
            <h1>${this.item}</h1>
            <p>${this.description}</p>
            <li>${this.price}</li>
        </div>
        `
    }
}
    const menuOne = [
        { item: 'Chicken Parm', description: 'The juciest breast of breaded chicken, golden fried to perfection, and baked in our hot oven with marinara and homemade mozzarella cheese', price: 16.95},
        { item: 'Cheese Pizza', description: 'The Classic Pizza Pie from Milano', price: 10.50},
        
    
    ];
    
    menuOne.forEach((dish)=> {
        console.log(dish);
        const newDish = new Menu(dish.item, dish.description, dish.price);
        document.getElementById('divvy').innerHTML += newDish.addDivData();
    })
    
    

// const newPerson = new Person('Dana', 47);
// const otherPerson = new Person('Kevin', 61);

// console.log(newPerson);
// newPerson.sayName();
// console.log(otherPerson);
// otherPerson.sayName();