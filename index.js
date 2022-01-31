import { greet } from './greet.js';

// "impure", has side effects // macht Dinge außerhalb der Funktion
// function greet() {
//  console.log('Hello world!');
// }

// pure function

//function greet() {
//  return 'Hello world!';
// }

console.log(greet('Jane Doe'));
