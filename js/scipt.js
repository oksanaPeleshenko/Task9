// write a function that takes the input string and reverses it

function reverseThisString(string) {
const splitString = string.split('');
const reverseLetters = splitString.reverse();
const joinLetters = reverseLetters.join('');
return joinLetters;
};

console.log(reverseThisString("Not a palindrome"));



// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase characters to uppercase


function swapCase(string) {
  let newArray = string.split('');
  let newString = '';
  newArray.forEach(letter =>  {
    if (letter == letter.toLowerCase())
    letter = letter.toUpperCase();
    else
    letter= letter.toLowerCase();
    newString+=letter;
  });
 
  return newString;
};

console.log(swapCase('ThiS Is How TeeNaGeRs wrItE'));



//convert array of numbers from fahrenheit to celsius

function toCelsius(array) {
    const celsiusTemps =  array.map(fTemp => (fTemp - 32)*(5/9));
    return celsiusTemps; 
};  

const arrayTemps= [23, 32, 41, 50, 59];
console.log(toCelsius(arrayTemps));



//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)

function passOrFail(array) {
  return array.map(grade => {
    return grade >=75;
  })
};
    
const arrayGrades = [20, 30, 50, 80, 90, 100];
console.log(passOrFail(arrayGrades));



//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']

function germanNumbers() {
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const numAndGerman = [];

    for (let i = 0; i < cardinalNumbers.length; i++) {
        numAndGerman.push(cardinalNumbers[i] + ' is ' + germanNumbers[i]);
    }
    return numAndGerman;
};
 
console.log(germanNumbers());



// write code that returns an array of ONLY prime numbers that are in the array numbers

function returnPrimeNumbers() {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const primeNums = numbers.filter(num => num % 2 != 0);
    return primeNums;
};
      
console.log(returnPrimeNumbers());



//Write a function that loops through and console.log's the numbers from 1 to 100, 
//except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, 
//for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". 
//For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT"

function kindaFizzBuzz()  {
    for(let i=1; i<=100; i++) {
      if(i % 3 == 0 && i % 5 == 0)
        console.log("CSC225 RULES I LOVE JAVASCRIPT");
      else if (i % 3 == 0)
        console.log("CSC225 RULES");
      else if (i % 5 == 0)
        console.log("I LOVE JAVASCRIPT");
      else
        console.log(i);
    }
  };
  
 kindaFizzBuzz();