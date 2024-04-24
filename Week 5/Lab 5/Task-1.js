//Task 1(Easy): Write a function called reverseArray
function reverseArray(array){
    var newArray  = new Array;
    //1,2,3,4,5
    console.log(array);
    for (let index = array.length-1; index >= 0; index--) {
        newArray.push(array[index]);
    }
    console.log("Reversed Array");
    console.log(newArray);
    return newArray;
}

const arr = [1,2,3,4,5];

const reversedArr = reverseArray(arr);
console.log(reverseArray);