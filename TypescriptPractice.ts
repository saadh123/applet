let id: number = 5;

let company: string = "Microsoft";

let isPublished: boolean = true;

let x: any = "hello";

let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];

//****************************************************************************************************************************************************************** */
//Tuple

let person: [number, string, boolean] = [1, "2", true];

let employee4: [number, string][];

let employee2: [number, number][] = [
  [1, 2],
  [2, 4],
  [3, 6],
];

employee4 = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//Union

let pid: string | number;
pid = 22;
//****************************************************************************************************************************************************************** */
//Enums (use equal sign, use entire obj name as type, numbers are VALUES)

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let playerDirection: Direction = Direction.Right;
console.log(playerDirection); // Output: 3

enum StatusCode {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500,
}

let responseCode: StatusCode = StatusCode.OK;
console.log(responseCode); // Output: 200

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let selectedColor: Color = Color.Green;
console.log(selectedColor); // Output: "GREEN"

enum Permissions1 {
  Read = 1,
  Write = 2,
  Execute = 4,
  Delete = 8,
}

let userPermissions: Permissions1 = Permissions1.Read | Permissions1.Write;
console.log(userPermissions); // Output: 3 (binary 11, representing Read and Write)

//****************************************************************************************************************************************************************** */
//TYPES

type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "john",
};
//****************************************************************************************************************************************************************** */
//Type Assertion (no compile time errors, only run time errors vs type annotation, which is compile time errors)

let cid: any = 1;
let customerId = cid as number;
// let customerId = <Number>cid;
customerId = 2;

// Variable with an inferred type that you want to change
let someValue: unknown = "Hello, TypeScript";

// Using a type assertion to specify the type
let greeting = (someValue as string).toUpperCase();
//****************************************************************************************************************************************************************** */

// Parse the JSON response
const userData: any = JSON.parse(apiResponse);

// Use type assertions to specify the expected structure
const userId = userData.id as number;
const userName = userData.name as string;
const userEmail = userData.email as string;

console.log(userId); // Output: 1
console.log(userName); // Output: "John Doe"
console.log(userEmail); // Output: "john@example.com"

//****************************************************************************************************************************************************************** */

//FUNCTIONS

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}
//****************************************************************************************************************************************************************** */
//Interface

interface UserInterface {
  readonly id: number; //CANNOT MANIPULATE
  name: string;
  age?: number; //OPTIONAL
}
const user1: UserInterface = {
  id: 1,
  name: "john",
};

user1.id = 5;
//****************************************************************************************************************************************************************** */
//INTERFACE (can add + extend from another interface) VS TYPE (can't add, must use & to extend)

// Interface example
interface Person5 {
  name: string;
  age: number;
}

// Extending an interface
interface Employee2 extends Person5 {
  employeeId: string;
}

// Type example
type Point2 = {
  x: number;
  y: number;
};

// Intersection type with type
type Point3D = Point2 & { z: number };

// Adding properties to an interface (open)
interface Person7 {
  address: string;
}

// Adding properties to a type (closed) - Error
type Point = {
  z: number; // Error: Duplicate identifier 'Point'.
};

//****************************************************************************************************************************************************************** */

interface MathFunc {
  (x: number, y: number): number;
}

const add2: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface MathFunc {
  (x: number, y: number): number;
}

// const add: MathFunc = (x, y) => x + y;
// const sub: MathFunc = (x, y) => x - y;

//****************************************************************************************************************************************************************** */

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Classes
class Person7 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person7(3, "Nigel");

class Employee extends Person7 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

//****************************************************************************************************************************************************************** */

//Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);

numArray.push("hello");

//****************************************************************************************************************************************************************** */

//INTERFACE AND TYPES

interface Animal {
  name: string;
  speak(): void;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  speak() {
    console.log("Woof!");
  },
};

console.log(dog.name); // "Buddy"
dog.speak(); // "Woof!"

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  jobTitle: string;
};

type EmployeeWithPersonalInfo = Person & Employee;

const employee: EmployeeWithPersonalInfo = {
  name: "Alice",
  age: 28,
  employeeId: "E12345",
  jobTitle: "Software Engineer",
};

console.log(employee.name); // "Alice"
console.log(employee.jobTitle); // "Software Engineer"

//INTERFACES ARE OPEN TO ADDING PROPERTIES, TYPES ARE NOT

interface Car {
  brand: string;
  start(): void;
}

interface Car {
  model: string;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Engine started.");
  },
};
