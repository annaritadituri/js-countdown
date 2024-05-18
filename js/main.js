'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE UNA VARIABILE DI TEMPO
let sec = 10;
//bonus 1
const showingCountdown= document.querySelector('h1');

//FAR PARTIRE L'AZIONE DOPO UN TOT DI TEMPO
let countdown = setInterval(function() {

    console.log({sec});
    showingCountdown.innerHTML = sec;
    if (sec === 0) {
        console.log({sec});
        clearInterval(countdown);
        //console.log("Buon Anno!!!");
        showingCountdown.innerHTML = "Buon anno!!!";
        //no bonus
        //alert("Buon anno!");
    }
    sec = sec - 1;

}, 1000)