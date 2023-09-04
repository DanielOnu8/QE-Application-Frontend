// Variables
let number1Input = document.getElementById("num1")
let number2Input = document.getElementById("num2")
let resultOutput = document.getElementById("result") //.innerhtml = result ??
let operand = ""
const operandObject = {}
const integersObject = {}

// Functions
function addOperand() {
    operand = "add"
    console.log(operand)
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
    integersObject.number1 = number1Input.value
    integersObject.number2 = number2Input.value
    operandObject.operator = operand
    console.log(operandObject)
    console.log(integersObject)
    axios
    .all([
      axios.post('http://localhost:8081/numberservice', JSON.stringify(integersObject)),
      axios.post('http://localhost:8081/operatorservice', JSON.stringify(operandObject))
    ])
    .then(axios.spread((numberservice, operatorservice) => console.log(operatorservice)))
    .catch(err => console.error(err));
}

function showOutput(operatorservice) {

}


//Event Listeners
let addButton = document.getElementById("add").addEventListener("click", addOperand)
let subButton = document.getElementById("sub").addEventListener("click", subOperand)
let mulButton = document.getElementById("mul").addEventListener("click", mulOperand)
let divButton = document.getElementById("div").addEventListener("click", divOperand)
let calcButton = document.getElementById("calc").addEventListener("click", sendToCalculate)