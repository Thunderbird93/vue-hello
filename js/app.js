const { createApp } = Vue;

createApp({
    data(){
        return{
            //qui mettiamo le nostre "variabili"
            messaggio: 'Ciao Vue!'
        }
    }
}).mount('#app')