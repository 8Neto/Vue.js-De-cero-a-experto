const nombre = 'Tony'
const apellido = 'Stark'

console.log(nombre, apellido) // Tony Stark

if (true) {
    console.log(nombre) // Tony
}

if (true) {
    const nombre = 'Peter'
    console.log(nombre) // Peter
}

let nombre2 = 'Tony'
console.log(nombre2) // Tony
if (true) {
    nombre2 = 'Peter'
    console.log(nombre2) // Peter
}

console.log(nombre2) // Peter
