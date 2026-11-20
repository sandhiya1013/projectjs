//1 to 2
var i = 1;
while(i <= 20) {
    console.log(i);
    i++;
}

//50 to 1
var i = 50;
while (i >= 1) {
    console.log(i);
    i--;
}

//  1 to 50 even number
var i = 1;

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// 1 to 30 odd number
var i = 1;

while (i <= 30) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

//multiple 7 
var i = 1;
while (i <= 10) {
      console.log(i + " * 7 = " + (i * 7));
    i++;
}

// 1 to 100
var i = 1;
var sum = 0;

while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log("Sum:", sum);

//fact 5
var i = 1;
var fact = 1;

while (i <= 5) {
    fact = fact * i;
    i++;
}

console.log("Factorial:", fact);


// count 1 to 10 odd,even
var i = 1;
var even = 0;
var odd = 0;

while (i <= 10) {
    if (i % 2 === 0) {
        even++;
    } else {
        odd++;
    }
    i++;
}

console.log("Even count:", even);
console.log("Odd count:", odd);


//Reverse  a number
var num = 12345;
var reverse = 0;

while (num > 0) {
    var digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reverse:", reverse);


