let firstName
let lastName

console.log(`${ firstName } ${ lastName }`) // undefined undefined

console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName' }`) // No firstName No lastName

lastName = 'Cruz'

console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName' }`) // No firstName Cruz

const isActive = true

let message = ''

if (isActive) {
    message = 'Activo'
} else {
    message = 'Inactivo'
}

console.log(message) // Activo

const message2 = isActive ? 'Activo' : 'Inactivo'

console.log(message2) // Activo
