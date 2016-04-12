//this is an example of a variable
var name = "Chris";

//how to debug
alerts, comments, console

//different data types
strings = "Chris", "Car"
numbers = 1,2,3
Boolean = true,false
undefined = (no value)
objects
arrays

//Arrays
var names = ["Julie", "Chris", "Billy"];
//Arrayception
var names = [ ["Julie", "Chris"], ["Camry", "Joe"] ]; 
//deleting from array
delete bag["umbrella"]
true
bag
Object {itemCount: 2, chair: Object}

var removeItem = function(item) {
  delete bag[item.desc];
  bag.itemCount --;
  console.log(item.desc + " removed from bag");
};
undefined


//Objects
objects = var cartoons = {simpsons: 'Bart', 'Maggie', 'Lisa', familyguy: 'Peter', 'Stewie', 'Brian'};
//pull out data
console.log(cartoons[familyguy]);
//or
console.log(cartoons.simpsons);

//Testing (if, elseif, else statements)
1===2;
>false
//if statements
if(x>10){
  console.log(x " is greater than 10, good job!");
}else if(x===x){
  console.log(x " is equal to " x)
}else if(x<10){
  console.log(x " is less than 10, good job!")
}else{
  console.log("you win 100 bucks!")
}

//logic (loops)
for(var i = 0; i<10; i++){
  console.log(i)
}

colors = ["yellow", "orange", "green"]
for(var i = 0; i< colors.length; i++){   
  console.log(beers[i]) 
}

x=6
while(x < 10){
  console.log("On number " + x)
  x++;
}

var rootBeer = 99
undefined
while(rootBeer > 0){
  console.log(rootBeer + " bottles of root beer on the wall, " + rootBeer + " bottles of root beer! Take one down, pass it around." + (rootBeer -= 1) + " bottles of root beer on the wall.");
};

//function 
function someName(name1, name2){
  return name1 + name2;
}
console.log(someName("Chris", "Ohad"));

//1. 
//function 1
function someNumber(numberOne, numberTwo){
  return numberOne + 3 + numberTwo;
}
console.log(someNumber(3,12));
>18

//function 2
function someName(name1, name2){
  return name1 + name2;
}
console.log(someName("Chris", "Ohad"));
>ChrisOhad

//function 3
function subtraction(num1, num2){
  return num1 - num2;
}
console.log(subtraction(4,3));
>1

//Complete four of the following problems
//1.
var x = {first: 1, second: 2}; 
console.log(x.first+x.second)

var user = {first: "Chris", second: "Steve"};
console.log(user.first+user.second)

//2.
var fruits = [ ["grape", "orange"], ["strawberry", "banana"] ];
console.log(fruits[0][1],fruits[1][1]);

//3.
x=5
if(x<10){
  alert("variable is less than 10");
}else{
  console.log("Your variable is " + x + " and is greater than 10");
}
//alerts and says "Your variable is less than 10"

//4.
x=11
if(x<10){
  alert("variable is less than 10");
}else{
  console.log("Your variable is " + x + " and is greater than 10");
}
//says "Your variable is 11 and is greater than 10"

//Additonal Problem
function doors(v_door)
if(door1){
  alert("whammy!");
}else if{(door2){
  alert("you win money!");
}else(door3){
  alert("nothing for you!");
}

//scopes
//must create functions in order to creat scopes
//how to create a global scope
//first set variable
var z = 1;
//then create function globally
function asd(){
  console.log(z);
}
//how to create local scope
//set global variable
var z = 3
//create function locally
function asd(z){
  console.log(z);
}
//input
asd(z)
//you get
10
//input
console.log(z);
//you get 
3 //because your local scope did not affect your global scope

//if statements within local scope or block scopes are the same, they are not affected globally
//function scope - argument only availabe within the function it gets declared in (local scope)
