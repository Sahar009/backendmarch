// variables 
// var let and Const 

var name = 'Moses'

var firstName = 'samuel'
// redeclare
var firstName ='Sheriff'
//reassign
firstName= 'Musa'
console.log(firstName);
// console.log(name)
// console.log('ali is a boy!!!')

// let variable

let userName = 'AppClick123'
let username ='ade'
userName='go123'
console.log(userName)

//const 
const Gender = 'male'

var numberOne = 3
var numberTwo = 4

console.log(numberOne % numberTwo);
var dev ="dev"

// data types in javascript
// 1. string
//2. integer aka Number
//3.Boolean
//4.Objects
//5.null
//6 Big Int
//7.Undefined
//8.symbol

var School = "AppClick"
var age = 10.44
var bigNumber = 10n
var phone 
var AC = null

console.log(typeof(AC));

var sym =Symbol('45')
console.log(typeof(sym));

var user = {name:'adam',age:23,gender:'male'}
var network =['mtn','glo',23,false,{gender:'male'}]
console.log(user);


let user1 ='2'
let user2 =2

console.log(user1 === user2);


// strings
var award ='Headies   '
console.log(award.length);
console.log(award[0]);

// string methods
var newaward =award.trim()
console.log(newaward.length);

var newestAward =newaward.replace("H","T")
console.log(newestAward);

console.log(newestAward.toUpperCase());
console.log(newestAward.includes('T'));


var numberOne = 32.34324432

console.log(numberOne.toFixed(1));

var convertedNumber=numberOne.toLocaleString();

console.log(numberOne.toPrecision(4));

// Math methods 

var Pi = Math.PI
console.log(Pi.toPrecision(4));
// math random
console.log(Math.random());

console.log(Math.round(23.64567));

console.log(Math.floor(23.64567));
console.log(Math.ceil(23.64567));



// functions 
// it is a block of code that performs a particular task and runs only when it is called

// anon function
//named function
// arrow function

// anonymous
function SayHello(){
    console.log('hello')
}
SayHello()
SayHello()
SayHello()

//named function
const greet = function(){
    console.log('greet');
}
greet()

//arrow 
const add = () =>{
    console.log('add');
}

add()

// return

function square(number){
return (
    // "the square of " + number +" is: "+ (number**2)
    `the square of ${number} is ${number**2}`
)
}

console.log(square(5));

// declare a function that calculate age 
//declare a function that checks calcultae area of a circle


const ageHandler = (UserYear) =>{
    var year =new Date().getFullYear()
return(
    `Your age is :  ${year - UserYear}` 
)
} 

console.log(ageHandler(2000));


// Date 
var TodayDate = new Date()
// console.log(TodayDate.getHours());
var day = TodayDate.getDay()
var month = TodayDate.getMonth()
var year = TodayDate.getFullYear()

console.log(`todays date is ${day} : ${month +1} : ${year}`);



console.log(TodayDate.toDateString());



function Time(){
    var Hours = TodayDate.getHours()
var Minutes = TodayDate.getMinutes()
var Sec = TodayDate.getSeconds()

console.log(`The Time is ${Hours} : ${Minutes} : ${Sec}`);
}



// setInterval(Time(),1000)



let UserAge = 12
let country = 'NGR'

if(UserAge >= 18 && country == 'NGR'){
console.log('eligible to vote');
}
else if(UserAge>= 25 && country != 'NGR') {
    console.log('eligible to vote');
}
else{
    console.log('not eligible to vote');
}

// TERNARY OPERATOR

const vote = UserAge >= 18 && country == 'NGR' ? "eligible to vote" : UserAge < 18 ?"not eligible from ternary": " not eligible from ternary"
console.log(vote);

// switch operator

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



var dayOfWeek = day
switch(dayOfWeek){
    case 1:
        console.log('today is monday!!');
        break;
    case 2:
        console.log('today is the second day of the week ');
        break;
    case 4:
        console.log('today is Thursday lets turn up ');
        break;
    case 5:
            console.log('today is Friday TGIF lets turn up ');
            break;
    default:
        console.log('invalid day of the week');
        break
}


// var names = document.querySelector('.teni')
// window.
// names.innerHTML= 'hello from javascript'