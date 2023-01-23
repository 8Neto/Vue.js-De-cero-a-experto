<template>
    <div>
        <h1>Quien es ese Pokémon?</h1>
        <PokemonPicture :pokemonId="300" :showPokemon="true"/>
        <PokemonOptions/>
    </div>
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>