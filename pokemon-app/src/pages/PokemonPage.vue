<template>
    <div>
        <h1>Quien es ese Pokémon?</h1>
        <div v-if="!pokemon">
            <h2>Aguantaaaaaa....</h2>
        </div>
        <div v-else="pokemon">
            <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
            <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)"/>
        </div>
    </div>
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    data: () => {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
        }
    },
    components: {
        PokemonPicture,
        PokemonOptions
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(pokemonId){
            if (pokemonId === this.pokemon.id) {
                this.showPokemon = true
            }
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>