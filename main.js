// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

//alert('Hello World')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num1 = 2
let num2 = 3
result = num1 + num2
console.log(result)
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

let num3 = 'g'
if (typeof num3 == 'number') {
  console.log('É um numero')
} else {
  console.log('Não é um numero')
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let txt = 'Joao'
if (typeof txt == 'string') {
  console.log('É uma string')
} else {
  console.log('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let isBoolean = true
if (typeof isBoolean == 'boolean') {
  console.log('É um booleano')
} else {
  console.log('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let num4 = 5
let num5 = 6
let result2 = num4 - num5
console.log(result2)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let num6 = 4
let num7 = 4
let result3 = num6 * num7
console.log(result3)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let num8 = 4
let num9 = 4
let result4 = num6 / num7
console.log(result4)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let num10 = 4
if (num10 % 2 === 0) {
  console.log('Numero par')
} else {
  console.log('Numero impar')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let num11 = 5
if (num11 % 2 === 0) {
  console.log('Numero par')
} else {
  console.log('Numero impar')
}
