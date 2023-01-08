<template>
    <h2>Counter</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
</template>

<script>
export default {
    data() {
        return {
            counter: 10
        }
    },

    methods: {
        getSquareValue() {
            console.log('getSquareValue') // se ejecuta las veces que es llamada
            return this.counter * this.counter
        }
    },
    computed:{
        squareCounter() {
            console.log('squareCounter') //  se ejecuta solo una vez
            return this.counter * this.counter
        }
    },
}
</script>

<style scoped>
</style>