/*
// if, else conditions structure

if(condition) {
    if true;
}
else {
    if false;
}
*/

// If, Else conditional examples

var isRaining = true;

if(isRaining === true) {
    console.log("I will not go outside");
}
else {
    console.log("I will go outside");
}

var isRaining = false;

if(isRaining === true) {
    console.log("I will not go outside");
}
else {
    console.log("I will go outside");
}

var isRaining = false;

if(isRaining) {
    console.log("I will not go outside");
}
else {
    console.log("I will go outside");
}

var isRaining = false;

if(!isRaining) {
    console.log("I will not go outside");
}
else {
    console.log("I will go outside");
}


// Ternary Syntax 

// condition ? if true : if false

var isRaining = false;

if(isRaining) {
    console.log("I will not go outside");
}
else {
    console.log("I will go outside");
}

isRaining === true ? console.log("I will not go outside") : console.log("I will go outside");

var myAge = 18;

myAge > 18 ? console.log("I am Adult") : console.log("I am not Adult");

var myMoney = 1200;

myMoney >= 1200 ? console.log("I am rich") : console.log("I am Poor");


// Multiple Conditions

var money = 69;
var isRaining = true;
var taxi = 6969;

if(isRaining === true && money >= taxi) {
    console.log("I will go to Market");
}
else {
    console.log("I will not go to market");
}

var money = 100;
var isRaining = true;
var taxi = 69;

if(isRaining === true && money >= taxi) {
    console.log("I will go to Market");
}
else {
    console.log("I will not go to market");
}

var money = 69;
var isRaining = false;
var taxi = 6969;

if(isRaining === false || money >= taxi) {
    console.log("I will go to Market");
}
else {
    console.log("I will not go to market");
}

var money = 100;
var isRaining = true;
var taxi = 69;

if(isRaining === false || money >= taxi) {
    console.log("I will go to Market");
}
else {
    console.log("I will not go to market");
}


var myMoney = 69;

if(myMoney >= 100) {
    console.log("Biriyani Khabo");
}
else if(myMoney >= 70) {
    console.log("Khicuri Khabo");
}
else if(myMoney >= 60) {
    console.log("Burger Khabo");
}
else {
    console.log("Kichui Khabo na");
}



// Nested conditions

var isRaining = true;
var haveUmbrella = false;

if(isRaining === true) {
    if(haveUmbrella === true) {
        console.log("I have chata. I will go outside");
    }
    else {
      console.log("I do not have any chata. I will not go outside");
    }
}
else {
   console.log("Oh, its a sunny day. I will go outside");
}