let input = document.querySelector('.inputBox').value
let operation
let num1

console.log(Math.trunc(15/10))

let add0 = () => {
  input += 0
  document.querySelector('.inputBox').value = Number(input)
}

let add1 = () => {
  input += 1
  document.querySelector('.inputBox').value = Number(input)
}

let add2 = () => {
  input += 2
  document.querySelector('.inputBox').value = Number(input)
}

let add3 = () => {
  input += 3
  document.querySelector('.inputBox').value = Number(input)
}

let add4 = () => {
  input += 4
  document.querySelector('.inputBox').value = Number(input)
}

let add5 = () => {
  input += 5
  document.querySelector('.inputBox').value = Number(input)
}

let add6 = () => {
  input += 6
  document.querySelector('.inputBox').value = Number(input)
}

let add7 = () => {
  input += 7
  document.querySelector('.inputBox').value = Number(input)
}

let add8 = () => {
  input += 8
  document.querySelector('.inputBox').value = Number(input)
}

let add9 = () => {
  input += 9
  document.querySelector('.inputBox').value = Number(input)
}

let bckspc = () => {
  if (document.querySelector('.inputBox').value > 10 || document.querySelector('.inputBox').value < -10) {
    document.querySelector('.inputBox').value = Math.trunc(document.querySelector('.inputBox').value/10)
    input = String(Math.trunc(input/10))
  } else {
    document.querySelector('.inputBox').value = 0
    input = ''
  }
}

let addDot = () => {
  input += '.'
  document.querySelector('.inputBox').value = Number(input)
}

let clearBtn = () => {
  input = ''
  document.querySelector('.inputBox').value = 0;
}

let plusBtn = () => {
  num1 = document.querySelector('.inputBox').value
  clearBtn()
  operation = '+'
}

let minusBtn = () => {
  num1 = document.querySelector('.inputBox').value
  clearBtn()
  operation = '-'
}

let multiplyBtn = () => {
  num1 = document.querySelector('.inputBox').value
  clearBtn()
  operation = '*'
}

let delBtn = () => {
  num1 = document.querySelector('.inputBox').value
  clearBtn()
  operation = '/'
}

let equalBtn = () => {
  console.log(num1)
  console.log(input)
  if (operation == '+') {
    document.querySelector('.inputBox').value = Number(num1) + Number(input)
  } else if (operation == '-') {
    document.querySelector('.inputBox').value = Number(num1) - Number(input)
  } else if (operation == '*') {
    document.querySelector('.inputBox').value = Number(num1) * Number(input)
  } else if (operation == '/') {
    document.querySelector('.inputBox').value = Number(num1) / Number(input)
  }
}
