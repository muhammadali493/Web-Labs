//Task 2(Medium): Create an object named car with properties brand, model, and year. Write a function calledcarInfo that takes the car object as input and returns a string with the car's information

//create function taking object input
function carInfo(obj){
    return `The car ${obj.brand} ${car.model} was manufactured in year ${car.year}`;
}

const car = {brand:"Audi", model:"xyz", year:1995};
console.log(carInfo(car));
