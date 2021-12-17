//Exporting and importing of objects, arrays, class, functions using ES6 modules

//objects

//  main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');

//  say.js
export function sayHi() { ... }
export function sayBye() { ... }
export function becomeSilent() { ... }


// helloworld.js

export function helloWorld() {
	return 'Hello World!';
}

// main.js

import helloWorld from './helloworld.js';

console.log(helloWorld());


//class

    //myclass.js 
    export default class myclass {
      ...
    } 
    //main.js
    import MyClass from "myclass";


//functions.js
//exporting a function
export function squareNumber(x) {
  return x * x; 
}
export var pi = 3.14; 

//main.js
import {squareNumber, pi} from "function"; 
var radius = 7; 
console.log("Area of a circle is", pi * squareNumber(7)); 








