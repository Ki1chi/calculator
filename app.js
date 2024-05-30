const screenNumber = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const smallScreen = document.querySelector(".small-screen")
const clear = document.querySelector(".all-clear")
// Displays numbers of the buttons that were pushed


numbers.forEach(button => button.addEventListener("click", ()=>{
    if(screenNumber.value == total){
        screenNumber.value ="";
    }
    screenNumber.value += button.value
}))



let total = 0;
let oldOperator;
let firstNumber = 1;


operators.forEach(button => button.addEventListener("click", ()=>{
    if(firstNumber == false){
        if(oldOperator == "-"){
            total = subtract(total,screenNumber.value);
        }
        if(oldOperator == "+"){
            total = add(total,screenNumber.value);
        }
        if(oldOperator == "*"){
            total = multiply(total,screenNumber.value);
        }
        if(oldOperator == "/"){
            total = divide(total,screenNumber.value);
        }

    screenNumber.value = total 
    oldOperator = button.value

    smallScreen.value = `${total} ${button.value}`
    }

    if (firstNumber == true){
        total = screenNumber.value;
        firstNumber = 0;
        oldOperator = button.value;
        
        smallScreen.value = `${total} ${oldOperator}`
        screenNumber.value = total;
    }
}))



clear.addEventListener("click",()=>{
    screenNumber.value ="0";
    smallScreen.value ="";
    oldOperator ="";
    total = 0;
    firstNumber = 1;
})




function add (a,b){
    return (+a + +b)
}
function subtract (a,b){
    return (a - b)
}
function multiply (a,b){
    return (a * b)
}
function divide (a,b){
    return (a / b)
}


