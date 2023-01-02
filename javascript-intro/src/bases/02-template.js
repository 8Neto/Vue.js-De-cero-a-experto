const nombre = 'Ernesto'
const apellido = 'Cruz'

const nombreCompleto = nombre + apellido

console.log(nombreCompleto) // ErnestoCruz

const nombreCompleto2 = nombre + ' ' + apellido

console.log(nombreCompleto2) // Ernesto Cruz

const nombreCompleto3 = `${ nombre } ${ apellido }`

console.log(nombreCompleto3) // Ernesto Cruz

console.log(`Resultado: ${ 1 + 1 }`) // Resultado: 2

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo('Ernesto') }`) // Este es un texto: Hola Ernesto
