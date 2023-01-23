import pokemonApi from '../api/pokemonApi'

const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map( (_, index) => index + 1)
}

const getPokemonNames = async ([a, b, c, d]=[]) => {

    const requests = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]

    const [poke1, poke2, poke3, poke4] = await Promise.all(requests)

    return [
        { name: poke1.data.name, id: poke1.data.id },
        { name: poke2.data.name, id: poke2.data.id },
        { name: poke3.data.name, id: poke3.data.id },
        { name: poke4.data.name, id: poke4.data.id }
    ]
}

const getPokemonOptions = () => {
    const mixed = getPokemons().sort(()=> Math.random() - 0.5)
    const options = getPokemonNames(mixed.splice(0,4))
    return options
}

export default getPokemonOptions