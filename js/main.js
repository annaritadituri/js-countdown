'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE UNA VARIABILE DI TEMPO
let sec = 10;

//FAR PARTIRE L'AZIONE DOPO UN TOT DI TEMPO
let countdown = setInterval(function() {

    console.log({sec});
    sec = sec - 1;
    if (sec === 0) {
        clearInterval(countdown);
        console.log({sec});
        //console.log("Buon Anno!!!");
        alert("Buon anno!");
    }

}, 1000)