const arreglo = [ 1, 2, 3, 4 ]

arreglo.push(5)

console.log(arreglo) // [ 1, 2, 3, 4, 5 ]

// arreglo = [ 1, 2, 3, 4, 5, 6 ]

const arreglo2 = arreglo

arreglo2.push(6)

console.log(arreglo) // [ 1, 2, 3, 4, 5, 6 ]

console.log(arreglo2) // [ 1, 2, 3, 4, 5, 6 ]

const arreglo3 = [ ...arreglo ]

arreglo3.push(7)

console.log(arreglo) // [ 1, 2, 3, 4, 5, 6 ]

console.log(arreglo3) // [ 1, 2, 3, 4, 5, 6, 7 ]

const arreglo4 = arreglo.map(function (n) {
    return n * 2
})

arreglo4.push(14)

console.log(arreglo) // [ 1, 2, 3, 4, 5, 6 ]

console.log(arreglo4) // [ 2, 4, 6, 8, 10, 12, 14 ]
