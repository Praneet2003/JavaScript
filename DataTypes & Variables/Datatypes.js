//string in javascript
//methord one " "
var firstname = "Praneet";
//methord two ' '
var newName = 'Anshu';
//methord three ` `
var new2Name = `AnshuKumarChourasia`;
//length of string
console.log(firstname.length);
console.log(newName.length);
console.log(new2Name.length);
//acessing items of string
console.log(firstname[0]);


//acessing last items of string
console.log(newName[new2Name.length - 1]);

//converting all letters of string toUpperCase
let nNew = firstname.toUpperCase();
console.log(nNew);
//converting all letters of string toLowerCase
console.log(nNew.toLowerCase());
console.log(firstname);
console.log(new2Name.toUpperCase());
//getting char from strings using slice.
let newStr = newName.slice(0,10);
console.log(new2Name);


//                      Data Types in JavaScript
//String
//Number
//Booleans
//Undefined
//null
//BigInt
//Symbol
//to find/know type of variable

var age = 20;
console.log(typeof new2Name);
console.log(typeof age);
//converting number to string
age = String(age);
console.log(typeof age);
//shortcut:- just add an empty string
age = age + "";
console.log(age);
console.log(typeof age);
//converting string to integer
//shortcut:- just use '+' infront of string 
let numStr = +"2024";
console.log(typeof numStr);
//string  concatenation
let str1 = "Hello";
let srt2 = "World";
//concatenation using template or back-ticks(ESC ke niche wala button)
let NewStr = `${str1} ${srt2}`;
console.log(NewStr);
console.log(typeof NewStr);
//general methord of string concatenation
let aboutMe = "My name is " + firstname +" and my age is "+ age;
console.log(aboutMe);
//using template string or back-tick
console.log(`My Name is ${firstname} and my age is ${age}`);
//undefined data type /NaN
let myVar;
console.log(typeof myVar);
let num1 = 20;
let num2;
let sum = num1 +  num2;
console.log(sum);
//null
let myVariable = null;
console.log(typeof myVariable);//shows object as an output because of the bug in javascript
//BigInt
let MyNumber = BigInt(6543878534658);
//shortcut: add 'n' at last
console.log(MyNumber);
let MyNumber2 = 453758894686785n;
console.log(MyNumber);
console.log(typeof MyNumber , typeof MyNumber2);
let someNumber = 123n;
//addition of BigInt
console.log(MyNumber + MyNumber2 + someNumber);
//Booleans Vs Comaprision operator
//booleans:- True, False;
//comparision operator:- (==, <, >, <=, >=)
//== Vs ===
let n1 = '7';
let n2 = 7;

console.log(n1 == n2);
console.log(n1 === n2);//also compares data type here.
// in the case of === it gives false because it also compares the data types
console.log("Day 1 JavaScript Revision");
console.log("Hello World");
console.log("Hello "+name);
