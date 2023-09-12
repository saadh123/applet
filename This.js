// ******************************************CONSTRUCTOR FUNCTION 1 *****************************************/

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} is speaking!`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog("TOM");
myDog.speak();

// ******************************************CONSTRUCTOR FUNCTION 2 *****************************************/

function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function () {
  console.log(this.name + " says Meow");
};

const myCat = new Cat("Whiskers");
const myPets = [myDog, myCat];

myPets.forEach((pet) => console.log(pet, "PET")); // "Buddy makes a sound" and "Whiskers says Meow"

// ******************************************CONSTRUCTOR FUNCTION 3 *****************************************/

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written in ${this.year} by ${this.author}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
  this.getMonth = function () {
    console.log(`${this.month} is today!`);
  };
}

Magazine.prototype = Object.create(Book.prototype);
//DO IT AFTER so it doesn't override

Magazine.prototype.getMonth = function () {
  return this.month;
};

const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");
console.log(Magazine.prototype);

// ****************************************CLASS COMPONENTS FUNCTION 1 *************************************/
class Book2 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

Book2.prototype.getSummary = function () {
  return `${this.title} was written in ${this.year} by ${this.author}`;
};

class Magazine extends Book2 {
  constructor(title, author, year, month) {
    super(title, author, year); // Call the parent class constructor
    this.month = month;
  }
}

Magazine.prototype = Object.create(Book2.prototype);

const mag2 = new Magazine("Mag One", "John Doe", "2018", "Jan");

// ****************************************CLASS COMPONENTS FUNCTION  2*************************************/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} is speaking at ${this.age}!`);
  }
}

class Dog extends Animal {
  constructor(name, age, paws) {
    super(name, age);
    this.paws = paws;
  }
  counter() {
    console.log(`${this.paws} is how many I have!`);
  }
}

const tom = new Dog("Tom", "99", "5");

tom.counter();
tom.speak();

// ******************************************ENCAPSULATE FUNCTION *****************************************/

function Counter() {
  let count = 0; // encapsulated variable

  this.increment = function () {
    count++;
  };

  this.getCount = function () {
    return count;
  };
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());

// ****************************************************************************************************************************************************************

function Counter(count) {
  this.count = count;

  this.increment = function () {
    count++;
  };

  this.getCount = function () {
    return count;
  };
}

const counter = new Counter(7);

counter.increment();

console.log(counter.getCount());
