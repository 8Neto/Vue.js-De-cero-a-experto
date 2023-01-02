const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45
}

console.log(persona) // { nombre: 'Tony', apellido: 'stark', edad: 45 }

const persona2 = persona

console.log(persona2) // { nombre: 'Tony', apellido: 'stark, edad: 45 }

persona2.nombre = 'Peter'

console.log(persona) // { nombre: 'Peter', apellido: 'stark, edad: 45 }

console.log(persona2) // { nombre: 'Peter', apellido: 'stark, edad: 45 }

const persona3 = { ...persona }

console.log(persona3) // { nombre: 'Peter', apellido: 'stark, edad: 45 }

persona3.nombre = 'Tony'

console.log(persona) // { nombre: 'Peter', apellido: 'stark, edad: 45 }

console.log(persona3) // { nombre: 'Tony', apellido: 'stark, edad: 45 }
