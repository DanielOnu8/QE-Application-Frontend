// Variables
let number1Input = document.getElementById("num1").value
let number2Input = document.getElementById("num2").value
let resultOutput = document.getElementById("result") //.innerhtml = result ??
let operand
const operandObject = {}
const integersObject = {}

// Functions
function addOperand() {
    operand = "add"
}

function subOperand() {
    operand = "subtract"
}

function mulOperand() {
    operand = "multiply"
}

function divOperand() {
    operand = "divide"
}

function sendToCalculate() {
    integers.number1 = number1Input
    integers.number2 = number2Input
    operandObject.operand = operand

}


//Event Listeners
let addButton = documnent.getElementById("add").addEventListener("click", addOperand)
let subButton = documnent.getElementById("sub").addEventListener("click", subOperand)
let mulButton = documnent.getElementById("mul").addEventListener("click", mulOperand)
let divButton = documnent.getElementById("div").addEventListener("click", divOperand)
let calcButton = documnent.getElementById("calc").addEventListener("click", sendToCalculate)

// const response = await fetch("https://localhost:8081/", {
// method: 'POST',
// headers: {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// },
// body: `{
//    "Id": 78912,
//    "Customer": "Jason Sweet",
//    "Quantity": 1,
//    "Price": 18.00
//   }`,
// });