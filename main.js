//1. Introducción a JavaScript

// Ejericio N°2

let a_1 = 12
let b_1 = 2
let c_1 = a_1 + b_1

console.log('La suma de a + b es:', c_1)

// Ejercico N°3

const name = prompt('Por favor ingrese su nombre:')

console.log(`Hola, ${name}!`)

//2. Operadores lógicos y condicionales

// Ejercicio N°1
let a = 12
let b = 6
let c = 2

let highestNumber = 0

if (a > b && a > c) {
  highestNumber = a
} else if (b > a && b > c) {
  highestNumber = b
} else {
  highestNumber = c
}

console.log('El mayor de los tres numeros es:', highestNumber)

// Ejercico N°2

const number = prompt('Ingresa un numero y te dire si es par o impar')

if (number % 2 == 0) {
  console.log(`El numero ${number}, es par`)
} else {
  console.log(`El numero ${number}, es impar`)
}

// 3. Operadores de asignación y bucles

// Ejercicio N°1
let n = 10

while (n >= 0) {
  console.log(n)
  n--
}

// Ejercico N°2
let numero = 0

do {
  numero = prompt('Ingrese un numero mayor a 100:')
} while (numero < 100)

console.log('Ingresate un numero mayor a 100: ', numero)

// 4. Funciones de JavaScript

// Ejercicio N°1

function esPar(number) {
  if (number % 2 == 0) {
    console.log(`El numero ${number} es par: `, true)
  } else {
    console.log(`El numero ${number} es par: `, false)
  }
}

console.log(esPar(12))

// Ejercicio N°2

function convertirCelsiusAFahrenheit(degrees) {
  return `${degrees}°C son equivalentes a ${degrees * 1.8 + 32}°F`
}

console.log(convertirCelsiusAFahrenheit(30))

// 5. Objetos en JavaScript

// Ejercicio N°1

const persona = {
  nombre: 'Leandro',
  edad: 21,
  ciudad: 'Buenos Aires',

  setCiudad: (city) => {
    persona.ciudad = city
  }
}

console.log(persona)
persona.setCiudad('Mendoza')
console.log(persona)

// Ejericio N°2

const Libro = {
  titulo: 'Harry Potter y la piedra filosofal',
  autor: 'J. K. Rowling',
  anno: 1995,

  isOld: (anno) => {
    const fechaActual = new Date()
    const annoActual = fechaActual.getFullYear()
    if (anno <= annoActual - 10) {
      console.log(`El libro ${Libro.titulo} es antiguo`, true)
    } else {
      console.log(`El libro ${Libro.titulo} es antiguo`, false)
    }
  }
}

Libro.isOld(Libro.anno)

// 6. Arrays

// Ejercicio N°1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosMult = numeros.map((num) => num * 2)

console.log(numeros)
console.log(numerosMult)

// Ejercicio N°2
const pares = []

let num = 1
for (let i = 0; i <= 20; i++) {
  if (num % 2 == 0) {
    pares[i] = num
  }
  num++
}

console.log(pares)

// 7. Introducción al DOM

// Ejercico N°1
const btnP = document.getElementById('btn-p')
const parrafos = document.querySelectorAll('.parrafo')

btnP.addEventListener('click', () => {
  parrafos.forEach((element) => {
    element.style.color = 'blue'
  })
})

// Ejercicio N°2
const form = document.getElementById('my-form')
const btnAlert = document.getElementById('btn-alert')

btnAlert.addEventListener('click', () => {
  const text = document.getElementById('text')
  const value = text.value
  alert('Has ingresado el siguiente mensaje: ' + value)
})

// 8. Eventos en DOM

// Ejercicio N°1

const elements = document.querySelectorAll('.element')

elements.forEach((element) => {
  element.addEventListener('click', () => console.log(element.textContent))
})

// Ejercico N°2

const btnEnabled = document.getElementById('btn-enabled')
const btnDisabled = document.getElementById('btn-disabled')

btnDisabled.addEventListener('click', () => {
  const input = document.getElementById('text-camp')

  input.disabled = true
})

btnEnabled.addEventListener('click', () => {
  const input = document.getElementById('text-camp')

  input.disabled = false
})

// 9. LocalStorage

// Ejercicio N°1

const emailInput = document.getElementById('email')
const emailSpan = document.getElementById('span')

const btnAdd = document.getElementById('btn-add')
const btnDelete = document.getElementById('btn-delete')

function updateEmail() {
  const email = localStorage.getItem('correo')
  emailSpan.textContent = email ? email : 'No hay correo guardado'
}

btnAdd.addEventListener('click', () => {
  const email = emailInput.value
  localStorage.setItem('correo', email)
  updateEmail()
})

btnDelete.addEventListener('click', () => {
  localStorage.removeItem('correo')
  updateEmail()
})

document.addEventListener('DOMContentLoaded', updateEmail)
