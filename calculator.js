// Lines of code for a simple calculator without user interface using JavaScript
alert ("Welcome!") 

const operation = (prompt("What operation would you like to perform?\nPlease select one: +, -, /, *"))

let num1 = parseFloat(prompt("Please enter first number"))
let num2 = parseFloat(prompt("Please enter second number"))

if (operation === '+') {
    result = num1 + num2
    alert(result)
} else if (operation === "-") {
    result = num1 - num2
    alert(result)
} else if (operation === "/") {
    result = num1/num2
    alert(result) 
} else if (operation === "*") {
    result = num1 * num2
    alert(result)
} else {
    alert("You have entered an invalid operator. Please try again")
}