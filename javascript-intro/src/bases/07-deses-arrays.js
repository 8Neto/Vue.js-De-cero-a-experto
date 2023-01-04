const characters = [ 'Goku', 'Vegeta', 'Trunks' ]

const g = characters[0]
const v = characters[1]
const t = characters[2]

console.log(g, v, t) // Goku Vegeta Trunks

const [ goku, vegeta, trunks] = characters

console.log(goku, vegeta, trunks) // Goku Vegeta Trunks

const [ , , t2 ] = characters

console.log(t2) // Trunks

const [ , vegeta2 ] = characters

console.log(vegeta2) // Vegeta

const [ goku3, vegeta3, trunks3, goten3='No tiene valor'] = characters

console.log(goku3, vegeta3, trunks3, goten3) // Goku Vegeta Trunks No tiene valor

const returnArray = () => {
    return ['ABC', 123]
}

const [ letters, numbers ] = returnArray()

console.log(letters, numbers) // ABC 123

const returnArray2 = ([letters, numbers]) => {
    return [letters, numbers]
}

const [ letters2, numbers2 ] = returnArray2(['ABC', 123])

console.log(letters, numbers) // ABC 123
