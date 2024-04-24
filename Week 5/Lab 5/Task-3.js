//Task 3(Hard): Higher Order function
//Write a higher-order function called applyFunction that takes two arguments: an array of numbers and a function. The function should apply the given function to each element of the array and return a new array with the results.

function applyFunction(numbers, func) {

    const results = [];
  
    for (const num of numbers) {

      results.push(func(num));
    }
  
    return results;
  }
  
  const numbers = [1, 2, 3];
  const doubleFunction = (x) => x * 2;
  
  const doubledNumbers = applyFunction(numbers, doubleFunction);
  
  console.log(`Original numbers: ${numbers}`);
  console.log(`Doubled numbers: ${doubledNumbers}`);