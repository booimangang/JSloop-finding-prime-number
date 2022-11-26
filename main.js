// input Number;
//loop 0 to inputNumber;
//check from 1 to the inputNumber if its divisible 
//by any number less than the inputNumber


let inputNumber = prompt("Input your number", '');
let one = 2;
let count = 0;
while (inputNumber >= one) {

    let divisor = one - 1;
    let isNumberPrime = true;

    while (divisor > 1) {

        if (one % divisor == 0) {
            isNumberPrime = false;
            break;
        }

        divisor--;
    }
    if (isNumberPrime) {
        console.log(`%c ${one} is prime number`, "color: orange")
        count++;
    }

    one++;
}
console.log(`prime number betwee 1 and ${inputNumber}`)
console.log(count)