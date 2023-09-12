//RECURSION

function factorial(n) {
  // Base case: if n is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Calculate the factorial of 5
const result = factorial(5);
console.log(result); // Output: 120

//********************************************************************************************************************************************************************* */
function sumArray(arr) {
  // Base case: an empty array has a sum of 0
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case: sum the first element and the sum of the rest of the elements
  return arr[0] + sumArray(arr.slice(1));
}

//********************************************************************************************************************************************************************* */
//CLOSURE
function outerFunc(a) {
  function innerFunc(b) {
    return a + b;
  }
  return innerFunc;
}

const sum = outerFunc(4);
console.log(sum(5));
//*********************************************************************************************************************************************************************
//CALLBACK
let add = 1;

function func1() {
  setTimeout(() => {
    add++;
    console.log(add);
  }, 1000);
}

func1();
//*********************************************************************************************************************************************************************
//BINARY SEARCH TREE
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode
//*********************************************************************************************************************************************************************
//LINKED LIST
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage example:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

linkedList.print(); // Output: 10, 20, 30
