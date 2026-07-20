Q=1
let num = Number(prompt("Enter a number:"));

if (num > 0) {
    console.log("The number is positive.");
}
else if (num < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}


Q= 2
let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


4
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


5
let num = Number(prompt("Enter a number:"));
let sum = 0;

do {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
} while (num > 0);

console.log("Sum of digits: " + sum);


6
for (let i = 1; i <= 50; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}


7
let num = Number(prompt("Enter a number:"));
let prime = true;

if (num <= 1) {
    prime = false;
}
else {
    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            prime = false;
            break;
        }

    }
}

if (prime) {
    console.log(num + " is a prime number.");
}
else {
    console.log(num + " is not a prime number.");
}


8
for (let i = 1; i <= 5; i++) {

    let star = "";

    for (let j = 1; j <= i; j++) {
        star += "*";
    }

    console.log(star);
}


9
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is " + num2);
} else {
    console.log("The largest number is " + num3);
}


10
let str = prompt("Enter a string:");

let reverse = str.split("").reverse().join("");

if (str === reverse) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}


11
let str = prompt("Enter a string:");

let vowels = 0;
let consonants = 0;

for (let ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
        if ("aeiou".includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Number of vowels: " + vowels);
console.log("Number of consonants: " + consonants);


12
let num = Number(prompt("Enter a number:"));
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed number:", reverse);


13
let evenSum = 0;
let oddSum = 0;
let i = 1;

while (i <= 100) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
    i++;
}

console.log("Sum of even numbers:", evenSum);
console.log("Sum of odd numbers:", oddSum);


14
let num = Number(prompt("Enter a number:"));
let factorial = 1;
let i = 1;

while (i <= num) {
    factorial *= i;
    i++;
}

console.log("Factorial:", factorial);


15
let n = Number(prompt("How many numbers?"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    let num = Number(prompt("Enter number " + i + ":"));
    sum += num;
}

let average = sum / n;

console.log("Sum:", sum);
console.log("Average:", average);


16
let year = Number(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


17
let num = Number(prompt("Enter a number:"));

console.log("Divisors of " + num + " are:");

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}



variable and data type example for practice
let value = 100 ;
console.log(typeof value);

value = "name" ;
console.log(typeof value);

value = true ;
console.log(typeof value);

value = null ;
console.log(typeof value);

value ;
console.log(typeof value);

value = 12345678880987654321n ;
console.log(typeof value);

let age ;
console.log(age);
age = 21;
console.log(age);

const student = {
    name: "aishwarya",
    age : 22,
    city:'pune',
    isadult:true,
}; 
student.name = "rutuja";
console.log( typeof student.isadult);
student.age = 45;
console.log(typeof student.age);

let fruits = ["apple","bannana","mango"];
console.log(fruits);

let person = {
    name:"rahul",
    age:45,
};
person.name = "kunal";
console.log("person",person);

let a = 20;
let b = 30;
let c = a-b;
console.log("a = ", a ," & b =",b);
console.log("c = ", a+b);
console.log("a = ", a ," & b = ", b);
console.log("c = ", a -b);
console.log("c = " , c)
console.log("a = ", a ," & b = ", b);
console.log("c = ", a+b);
console.log("a = ", a ," & b = ", b);
console.log("c = ", a-b);
console.log("a = ", a ," & b = ", b);
console.log("c = ", a*b);
console.log("a = ", a ," & b = ", b);
console.log("c = ", a/b);
console.log("a = ", a ," & b = ", b);
console.log("c = ", a % b);


let x = 2;
let y = 4;
console.log("x = ", x ," & x = ", x);
console.log(" x = ", x ** y );
console.log("x = ", x ," & x = ", y);
console.log(" x = ", x % y );

console.log("(x = x + 1 ) = ", x );
y = y - 1 ;
console.log(y);
console.log("(x=x+1)= x=2+1")
console.log("x++", x++);
console.log("x=",x);
console.log("++x", ++x);



let x= 5;
console.log("x++=",x++);
console.log(x);
console.log("++x=",++x);
console.log(x)

let number = 25;
console.log(number % 2);
let power = 5;
console.log(power ** 2);


// addition of two number

let num1 = 26;
let num2 = 56;
let sum = num1 + num2;
console.log("addition = ", sum);
console.log(num1+num2);

//subtraction of two number
let num3=10;
let num4= 5;
let sum1 = num3 - num4;
console.log("subtraction=" , num3 -num4);


//multiplication of two number
let num5=5;
let num6=2;
let num7=20;
console.log("multiplication=",num5*num6*num7);

//remainder of two number
let num8=5;
let num9=10;
console.log("remainder=",num8%num9);

// square
let number= 5;
let square=number**2
console.log("square=",square);

//cube
let number1=2;
let number2=3;
// let cube = number1**3;
console.log("cube=",2**3);

// Write a program to calculate the total marks of 5 subject

let math=50;
let science=70;
let history=67;
let marathi=70;
let hindi=72;
let english=58;
let totalmarks=math+science+history+marathi+hindi+english;
console.log("totalmarks=",totalmarks);
let totalsubject=6;
console.log("totalsubjcet=",6);
let average=totalmarks/totalsubject;
console.log("average=", totalmarks/totalsubject);

let lenght=20;
let width=10;
let area=lenght*width;
console.log("area=",area);

let l=10;
let w=5;
// let perimeter=2*(l+w);
console.log("perimeter=", 2*(l+w));
let amount=25000;
let bonus=1500;
let totalamount=amount+bonus;
console.log(  totalamount);
let price=3000;
let discount=200;
let finalprice=price-discount;
console.log(finalprice);

let result= (10+20)*5-30/3;
console.log(result);

// Step 1: Declare two variables

let num11 = 100;
let num21 = 5;

// Step 2: Divide the numbers

let ans = num11 / num21;

// Step 3: Print the result

console.log("First Number =", num11);
console.log("Second Number =", num21);
console.log("Division =", ans);

let numb=6;
let cube=numb**3;
console.log(cube);

let numbe=15;
let numbe1=2;
console.log(numbe**numbe1);

let num31=2;
let num32=5;
let num33=8;
let num34=3;
let num35=4;
let total= num31+num32+num33+num34+num35;
let average = total/5;
console.log("total",total);
console.log("average=",average);