function saludar() {
    return 'Hola mundo'
}

console.log( saludar() ) // Hola mundo

const nombre = 'Tony'

function saludar2(nombre) {
    return `Hola ${nombre}`
}

console.log( saludar2(nombre) ) // Hola Tony

const saludar3 = function saludar2(nombre) {
    return `Hola ${nombre}`
}

console.log( saludar3(nombre) ) // Hola Tony

const saludar4 = (nombre) => {
    return `Hola ${nombre}`
}

console.log( saludar4(nombre) ) // Hola Tony

const saludar5 = (nombre) => `Hola ${nombre}`

console.log( saludar5(nombre) ) // Hola Tony

const saludar6 = nombre => `Hola ${nombre}`

console.log( saludar6(nombre) ) // Hola Tony

const saludar7 = (nombre = 'Peter') => `Hola ${nombre}`

console.log( saludar7() ) // Hola Peter

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Tony'
    }
}

console.log( getUser() ) // { uid: 'ABC123', username: 'Tony' }

// const getUser = () => { uid: 'ABC123', username: 'Tony' }

const getUser2 = () => ({ uid: 'ABC123', username: 'Tony' })

console.log( getUser2() ) // { uid: 'ABC123', username: 'Tony' }

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    }
]

const existe = heroes.some( heroe  => heroe.id === 1)

console.log(existe) // true

const heroe =  heroes.find( heroe  => heroe.id === 1)

console.log(heroe) // { id: 1, name: 'Batman' }
