//conditional statements
//if-else statement
var age = prompt("enter your age");
if (age>=18){
    console.log("You are Eligible");
}else{
    console.log("You are too small/not Eligible");
}
//falsy values
//false, "", null, undefined, 0
//ternary operator importance 
var drink;
if(age>= 15){12
    drink = "coffee";
}else{
    drink= "milk";
}
console.log(drink);
//ternary oprator makes the above programme eaiser and shorter
var drink = age<=15? "milk" : "coffee";
console.log(drink);
//nested if else
let WinningNumber = 19;
let userGuess = +prompt("Guess a number");
console.log(userGuess);
if (userGuess === WinningNumber){
    console.log("Your guess was right");
}else{
    if(userGuess < WinningNumber){
        console.log("Too low");
    }else{
        console.log("Too High");
    }
}
//elseif Statement
let tempInDeg = prompt("Enter the Temprature in degree");
if (tempInDeg < 0){
    console.log("Extremly Cold");
}else if(tempInDeg < 15){
    console.log("It is cold Outside");
}else if(tempInDeg <=25){
    console.log("weather is Okay!");
}else if(tempInDeg < 35){
    console.log("Lets go for Swimming");
}else if(tempInDeg < 45){
    console.log("Turn on the AC!")
}else{
    console.log("TO Hot!");
}
//switch statements
//switch statement is the another way in place of else if
let Day = prompt("Enter a Day no");
switch(Day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Ssturday");
        break;
    default:
        console.log("enter a valid day no");
}