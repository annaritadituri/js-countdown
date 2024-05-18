'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE UNA VARIABILE DI TEMPO
let sec = 10;
//bonus 1
const showingCountdown= document.querySelector('h1');
//bonus 2
const stopButton = document.getElementById('stop');

//FAR PARTIRE L'AZIONE DOPO UN TOT DI TEMPO
let countdown = setInterval(function() {

    console.log({sec});
    //bonus 1
    showingCountdown.innerHTML = sec;
    if (sec === 0) {
        console.log({sec});
        clearInterval(countdown);
        //console.log("Buon Anno!!!");
        //bonus 1
        showingCountdown.innerHTML = "Buon anno!!!";
        //no bonus
        //alert("Buon anno!");
    }
    sec = sec - 1;

}, 1000)

//bonus 2
stopButton.addEventListener('click',
    function() {
        clearInterval(countdown);
        console.log("Buon Anno!!!");
        showingCountdown.innerHTML = "Buon anno!!!";
        //alert("Buon anno!");
    }
)