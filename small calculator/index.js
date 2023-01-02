let numberA = prompt("Please enter number A:");
let operator = prompt("please enter operator +,-,*,/:")
let numberB = prompt("Please enter number B:");


/*let result1 = sum(numberA,numberB);

let result2 = deduction(numberA,numberB);

let result3 = multiplication(numberA,numberB);

let result4 = division(numberA,numberB);*/


var message=(operator == "+")? alert(" The result is: " + result1):"please enter an operator ";
var message=(operator == "-")? alert(" The result is: " + result2):"please enter an operator ";
var message=(operator == "*")? alert(" The result is: " + result3):"please enter an operator ";
var message=(operator == "/")? alert(" The result is: " + result4):"please enter an operator ";

function sum(a, b) {
    return parseInt(a) + parseInt(b) 
}

function deduction(a, b) {  
return parseInt(a) - parseInt(b)
}

function multiplication(a, b) {
    return parseInt(a) * parseInt(b)   
}
   
function division(a, b) {
    
return  parseInt(a) / parseInt(b)
}


