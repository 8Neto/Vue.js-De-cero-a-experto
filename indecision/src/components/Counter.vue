<template>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

    <div>
        <!-- v-on: == @ -->
        <button @click="increase">+1</button>
        <button v-on:click="decrease">-1</button>
    </div>

</template>

<script>
export default {
    props: {
        title:String,
        start: {
            type: Number,
            default: 10,
            validator(value){
                return value > 0
            }
            // required: true

        }
    },
    data() {
        return {
            counter: this.start
        }
    },

    methods: {
        getSquareValue() {
            console.log('getSquareValue') // se ejecuta las veces que es llamada
            return this.counter * this.counter
        },
        increase(){
            this.counter++
        },
        decrease(){
            this.counter--
        },
    },
    computed:{
        squareCounter() {
            console.log('squareCounter') //  se ejecuta solo una vez
            return this.counter * this.counter
        },
        customTitle(){
            return this.title || 'Counter'
        }
    },
}
</script>

<style scoped>

    button {
        background-color: #64bb87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }

</style>