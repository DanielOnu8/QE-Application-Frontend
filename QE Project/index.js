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
    console.log(operand)
}

function mulOperand() {
    operand = "multiply"
    console.log(operand)
}

function divOperand() {
    operand = "divide"
    console.log(operand)
}

function sendToCalculate() {
    integersObject.number1 = Number(number1Input.value)
    integersObject.number2 = Number(number2Input.value)
    operandObject.operator = operand
    console.log(operandObject)
    console.log(integersObject)
    console.log(typeof integersObject.number1)

    const options = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    // axios.post('http://localhost:8081/numberservice', JSON.stringify(integersObject),  {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //   axios.post('http://localhost:8081/operatorservice', JSON.stringify(operandObject),  {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios
    .all([
      axios.post('http://localhost:8081/numberservice', integersObject, options),
      axios.post('http://localhost:8081/operatorservice', operandObject, options)
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