//grade
var students = [
    { name: "sandy", mark: 85 },
    { name: "sugu", mark: 25 },
    { name: "sarju", mark: 65 },
    { name: "ajith", mark: 30 },
    { name: "navin", mark: 90 }
];
for (var i = 0; i < students.length; i++) 
{
    if (students[i].mark >= 80)
    {
        console.log(students[i].name + " - Grade A");
      
    } 
    else if (students[i].mark >= 60) 
    {
        console.log(students[i].name + " - Grade B");
        
    } else if (students[i].mark >= 35) {
        console.log(students[i].name + " - Grade C");
        
    } else {
        console.log(students[i].name + " - Fail");
    
    }
}



//shopping cart
var cart = [
    { name: "iphone", price: 50000 },
    { name: "keypad phone", price: 1000 },
    { name: "android", price: 20000 }
];

var total = 0;
for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
}
var discount = 0;

if (total >= 50000) {
    discount = total * 20 / 100;
} else if (total >= 20000) {
    discount = total * 10 / 100;
} else if (total >= 5000) {
    discount = total * 5 / 100;
}

console.log("Total:", total);
console.log("Discount:", discount);
console.log("Final Amount:", total - discount);


// atm 
var accounts = 
[
    { name: "Arun", balance: 10000, withdrawal: 3000 },
    { name: "Priya", balance: 5000, withdrawal: 6000 },
    { name: "Kumar", balance: 8000, withdrawal: 0 }
];
for (var i = 0; i < accounts.length; i++) 
{
    console.log("Name:", accounts[i].name);

    if (accounts[i].withdrawal <= 0) 
    {
        console.log("Invalid amount");
    } 
    else if (accounts[i].withdrawal > accounts[i].balance) 
    {
        console.log("Insufficient balance");
    } 
    else 
    {
        accounts[i].balance = accounts[i].balance - accounts[i].withdrawal;
        console.log("Withdrawal successful");
        console.log("Balance:", accounts[i].balance);
    }
} 

//stock
var products = [
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 3 },
    { name: "Monitor", stock: 15 }
];

for (var i = 0; i < products.length; i++) {
    if (products[i].stock === 0) {
        console.log(products[i].name + " - Out of Stock");
    } else if (products[i].stock <= 5) {
        console.log(products[i].name + " - Low Stock");
    } else {
        console.log(products[i].name + " - Stock Available");
    }
}

//employee salary
var employees = [
    { name: "Arun", salary: 15000 },
    { name: "Priya", salary: 30000 },
    { name: "Kumar", salary: 50000 },
    { name: "Divya", salary: 20000 }
];

for (var i = 0; i < employees.length; i++) {
    if (employees[i].salary >= 40000) {
        console.log(employees[i].name + " - High Salary");
    } else if (employees[i].salary >= 20000) {
        console.log(employees[i].name + " - Medium Salary");
    } else {
        console.log(employees[i].name + " - Low Salary");
    }
}

//odd and even no
var numbers = [10, 15, 22, 33, 40, 51];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " - Even");
    } else {
        console.log(numbers[i] + " - Odd");
    }
}
//positive negative no 
var num = [10, -5, 0, 20, -8, 0];
for (var i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        console.log(num[i] + " - Positive");
    } else if (num[i] < 0) {
        console.log(num[i] + " - Negative");
    } else {
        console.log(num[i] + " - Zero");
    }
}
// total and average
var numb = [10, 20, 30, 40, 50];
var total = 0;
for (var i = 0; i < numb.length; i++) 
    {
    total = total + numb[i];
}

var average = total / numb.length;
console.log("Total:", total);
console.log("Average:", average);


//largest and smallest
var numbers = [25, 10, 80, 5, 45];

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Largest:", largest);
console.log("Smallest:", smallest);

//divide 5
var numbers = [10, 12, 15, 22, 25, 30, 33];
var count = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        console.log(numbers[i]);
        count++;
    }
}

console.log("Count:", count);






