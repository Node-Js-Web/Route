function GetAgeInSDays(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var ageInDays = (today.getFullYear() - birthDate.getFullYear()) * 365.24;
    return ageInDays;
}

console.log(GetAgeInSDays("1994-05-05"));

let CalculateSmallestNumber=function (arr) {
    
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(CalculateSmallestNumber([10, 5, 6, 2, 4]));

let OrderDesnding = function (arr) { 

    arr.sort(function (a, b) { return b - a });
    return arr;
}

console.log(OrderDesnding([10, 5, 6, 2, 4]));

let CalculateAvarageNumber= function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(CalculateAvarageNumber([10, 5, 6, 2, 4]));


//*****************************************************************************************************
//Console.log([] == []) ->> array created in heap and every index point to different adress, so it will return false
//Console.log( { } == { } ) ->> object created in heap and every index point to different adress, so it will return false

function main() {
    console.log("A");
    setTimeout(function print() {
        console.log("B");
    }, 0);
    console.log("C");
}
main(); // A C B beacuse setTimeout is async function and it will be executed after main function is finished


var num = 8;
var num = 10;
console.log(num); // var is redeclared

function sayHi() {
    console.log(name);// undefined beacuse it is hoisted to the top of the function and it is not initialized yet 
    console.log(age);// ReferenceError: age is not defined beacuse let is not hoisted and let not support hoisting
    var name = 'Ayush';
    let age = 21;
}
sayHi();


