//**PROMISES */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("Random number is too small");
    }
  }, 1000);
});

myPromise
  .then((value) => {
    console.log("Fulfilled:", value);
  })
  .catch((reason) => {
    console.error("Rejected:", reason);
  });

//********************************************************************************************************************************************************************* */

//**CALL METHOD */
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const anotherPerson = {
  name: "Alice",
};

person.sayHello.call(anotherPerson); // Output: "Hello, my name is Alice"

//**APPLY METHOD */
const numbers = [1, 2, 3, 4, 5];

function sum() {
  return this.reduce((total, num) => total + num, 0);
}

const result = sum.apply(numbers);
console.log(result); // Output: 15

//**BIND METHOD */
const person1 = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const helloJohn = person1.sayHello.bind(person1);
