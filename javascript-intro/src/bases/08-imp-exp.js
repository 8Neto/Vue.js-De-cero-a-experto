// import { owners } from './data/heroes';

// console.log(owners) // [ 'DC', 'Marvel' ]

// import superHeroes from './/data/heroes'

// console.log(superHeroes) // [{id: 1,name: 'Batman',owner: 'DC'},{id: 2,name: 'Spiderman',owner: 'Marvel'},{id: 3,name: 'Superman',owner: 'DC'},{id: 4,name: 'Flash',owner: 'DC'},{id: 5,name: 'Wolverine',owner: 'Marvel'}]

import { getHeroById, getHeroesByOwner } from "./data/heroes"

console.log( getHeroById(2)) // { id: 2, name: 'Spiderman', owner: 'Marvel' }

console.log( getHeroesByOwner('DC') ) // [{id: 1,name: 'Batman',owner: 'DC'},{id: 3,name: 'Superman',owner: 'DC'},{id: 4,name: 'Flash',owner: 'DC'}]
