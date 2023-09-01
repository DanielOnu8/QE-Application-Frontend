var number1 = document.getElementById("num1")
var number2 = document.getElementById("num2")
var result = document.getElementById("result")
var operator

document.getElementById("add").addEventListener("click", function() {
    operator = "add"
})

document.getElementById("sub").addEventListener("click". function () {
    operator = "subtract"
})

document.getElementById("mul").addEventListener("click". function () {
    operator = "multiply"
})

document.getElementById("div").addEventListener("click". function () {
    operator = "divide"
})

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