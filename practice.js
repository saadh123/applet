function func2(str) {
  let str1 = str.split("").reverse().join("");
  console.log(str1);
}

func2("hello");

//*********************************************************************************************************************************************************************
async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAsync();
//*********************************************************************************************************************************************************************

fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => {
  return data
    .json()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//********************************************************************************************************************************************************************* */
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");

//********************************************************************************************************************************************************************* */

function fetchData(url, callback) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

// Pass a custom callback function to fetchData
fetchData("https://jsonplaceholder.typicode.com/posts/1", function (data) {
  console.log("Data:", data);
});
//********************************************************************************************************************************************************************* */

//********************************************************************************************************************************************************************* */
function removeDuplicates(array) {
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

const arrayWithDuplicates2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = removeDuplicates(arrayWithDuplicates2);
//********************************************************************************************************************************************************************* */

function removeDuplicates(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//********************************************************************************************************************************************************************* */

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
