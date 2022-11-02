const { createApp } = Vue;

createApp({
    data(){
        return{
            //qui mettiamo le nostre "variabili"
            messaggio: 'This is Vue!',
            bgColor: "",
            counter: 0,
        }
    },

    methods: {
        colorChange(){
            this.bgColor = "blue",
            this.counter++
        }
    }
}).mount('#app')
