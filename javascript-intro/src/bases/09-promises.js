import { getHeroById } from './data/heroes'

console.log('Inicio')

new Promise ((resolve, reject) => {
    console.log('Cuerpo de la promesa')

    // resolve('Promesa exitosa')

    reject('Promesa resuelta con error')
})
.then( msg => console.log( msg ))
.catch( err => console.log( err ))

// new Promise ((resolve, reject) => {
//     console.log('Cuerpo de la promesa')

//     resolve('Promesa exitosa')

//     reject('Promesa resuelta con error')
// })
// .then( console.log )
// .catch( console.log )

console.log('Fin')

const getHeroByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroById(id)

            if (hero) {
                resolve(`El heroe es ${hero.name}`)
            } else {
                reject('Heroe no existe')
            }
        }, 1000);

    })
}

getHeroByIdAsync(0)
.then(heroe => console.log(heroe))
.catch(err => console.log(err))

