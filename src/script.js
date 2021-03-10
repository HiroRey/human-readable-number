"use strict"

function Calculator() {
    this.a;
    this.b;

    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function() {
        return (this.a+this.b);
    };
    this.mul = function() {
       return (this.a*this.b);
    }
}
let calculator = new Calculator();

calculator.read(5,6);

console.log( "Sum=" + calculator.sum());
console.log( "Mul=" + calculator.mul() );
console.log(calculator);
calculator.read(3,2);
console.log(calculator);
console.log( "Sum=" + calculator.sum());
console.log( "Mul=" + calculator.mul() );