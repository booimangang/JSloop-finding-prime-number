// input Number;
//loop 0 to inputNumber;
//check from 1 to the inputNumber if its divisible 
//by any number less than the inputNumber


let inputNumber = prompt("Input your number", '');
// let inputNumber = 50;
let dividentNumber = 2;
let primeCount = 0;

while (dividentNumber <= inputNumber) {
    let divisorNumber = dividentNumber - 1;
    let isNumberPrime = true;

    while (divisorNumber > 1) {

        if (dividentNumber % divisorNumber == 0) {
            isNumberPrime = false;
            break;
        }

        divisorNumber--;
    }
    if (isNumberPrime) {
        console.log(`%c ${dividentNumber} is prime number`, "color: orange")
        primeCount++;
    }

    dividentNumber++;
}
console.log(`prime number betwee 1 and ${inputNumber}`)
console.log(primeCount)

