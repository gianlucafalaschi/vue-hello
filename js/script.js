/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. 
 */

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Booleaners!',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gLD47T7AWcPYjYGU_1OuuB0rkzxbz-g3u8I-cGlwQ6Y_na0GqSgVduri6uEq5gqQGw&usqp=CAU'
            
        };
    }
}).mount('#app');
