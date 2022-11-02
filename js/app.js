const { createApp } = Vue;

createApp({
    data(){
        return{
            //qui mettiamo le nostre "variabili"
            messaggio: 'This is Vue!',
            bgColor: ""
        }
    },

    methods: {
        colorChange(){
            this.bgColor = "blue"
        }
    }
}).mount('#app')
