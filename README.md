<!--
TRACCIA

Simulare un count down di 10 secondi che alla fine dice "Buon anno!"
Potete stampare il messaggio in pagina con un semplice alert.
Bonus 1
Mostrate il conteggio alla rovescia in pagina;
Bonus 2
Aggiungete un bottone che interrompe il count down e mostra il messaggio;
-->

<!--
DEFINIRE UNA VARIABILE DI TEMPO
-->
-Creare una variabile sec = 10

<!--
FAR PARTIRE L'AZIONE DOPO UN TOT DI TEMPO
-->
-Usare setInterval per attivare un countdown ogni secondo
--Stampare il valore di ogni secondo che passa
---Bloccare il timer quando si arriva a 0
----Stampare "buon anno"

<!--
Bonus 1
-->
-Creare una variabile per modificare l'elemento h1 presente nell'HTML
--Riassegnare alla variabile il valore = sec nel setInterval
---Quando entra nel controllo if riassegnare alla variabile la stringa "buon anno"

<!--
Bonus 2
-->
-Creare una variabile legata al pulsante presente nell'HTML
--Aggiungere un eventListener alla variabile (click)
---Sul click usare la funzione clearInterval per fermare il countdown e stampare nel DOM "buon anno"