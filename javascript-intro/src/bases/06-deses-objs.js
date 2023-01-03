const person = {
    name: 'Tony',
    age: 46,
    codeName: 'Ironman'
}

console.log(person.name) // Tony
console.log(person.age) // 46
console.log(person.codeName) //Ironman

const { name, age, codeName } = person

console.log(name) // Tony
console.log(age) // 46
console.log(codeName) //Ironman

const person2 = {
    name2: 'Tony',
    age2: 46,
    codeName2: 'Ironman'
}

const { name2, age2, codeName2, power2= 'No tiene poder'} = person2

console.log(name2) // Tony
console.log(age2) // 46
console.log(codeName2) //Ironman
console.log(power2) // No tiene poder

const person3 = {
    name3: 'Tony',
    age3: 46,
    codeName3: 'Ironman',
    power3: 'Dinero'
}

const { name3, age3, codeName3, power3= 'No tiene poder'} = person3

console.log(name3) // Tony
console.log(age3) // 46
console.log(codeName3) //Ironman
console.log(power3) // Dinero

const createHero = ( person ) => {

    const { name, age, codeName, power='No tiene poder' } = person

    return {
        id: 1209381,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }
}

console.log( createHero(person) ) // { id: 1209381, name: 'Tony', age: 46, codeName: 'Ironman', power: 'No tiene poder' }

const createHero2 = ( person ) => {

    const { name, age, codeName, power='No tiene poder' } = person

    return {
        id: 1209381,
        name,
        age,
        codeName,
        power
    }
}

console.log( createHero2(person) ) // { id: 1209381, name: 'Tony', age: 46, codeName: 'Ironman', power: 'No tiene poder' }

const createHero3 = ( { name, age, codeName, power='No tiene poder' }) => {
    return {
        id: 1209381,
        name,
        age,
        codeName,
        power
    }
}

console.log( createHero3(person) ) // { id: 1209381, name: 'Tony', age: 46, codeName: 'Ironman', power: 'No tiene poder' }

const createHero4 = ( { name, age, codeName, power='No tiene poder' }) => ({
    id: 1209381,
    name,
    age,
    codeName,
    power
})

console.log( createHero4(person) ) // { id: 1209381, name: 'Tony', age: 46, codeName: 'Ironman', power: 'No tiene poder' }

const createHero5 = ( { name:nombre, age, codeName, power='No tiene poder' }) => ({
    id: 1209381,
    nombre,
    age,
    codeName,
    power
})

console.log( createHero5(person) ) // { id: 1209381, nombre: 'Tony', age: 46, codeName: 'Ironman', power: 'No tiene poder' }
