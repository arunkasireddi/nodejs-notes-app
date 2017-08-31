var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Arun',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        // arguments and this won't work in arrow functions.         
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};
user.sayHiAlt(1, 2, 3);