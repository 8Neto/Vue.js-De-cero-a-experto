const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> {{1 + 1}} </p>
    // `

    data() {
        return {
            author:'Batman',
            quote: 'Soy Batman',
        }
    },

    methods: {
        changeQuote(){
            this.author = 'Ernesto Cruz'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount("#myApp")