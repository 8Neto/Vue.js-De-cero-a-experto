<template>
    <div>
        <h1>Quien es ese Pokémon?</h1>
        <PokemonPicture :pokemonId="6" :showPokemon="false"/>
        <PokemonOptions :pokemons="pokemonArr"/>
    </div>
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    data: () => {
        return {
            pokemonArr: []
        }
    },
    components: {
        PokemonPicture,
        PokemonOptions
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
        }
    },
    mounted(){
        console.log('test')
        this.mixPokemonArray()
    }
}
</script>