Title
===
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. <br>
*MILESTONE 1* <br>
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.<br>
*MILESTONE 2*<br>
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.<br>
*MILESTONE 3*<br>
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.<br>
*BONUS 1*<br>
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.<br>
*BONUS 2*<br>
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
## Steps
- Creare il container e la struttura del carousel;
- Creare un ciclo che stampi tutte le immagini;
- Dare a tutte le immagini la classe "hide" e togliera alla prima foto;
- Al click up o down aggiungere la classe hide all'img visibile per farla scomparire;
- Al click down incrementare il contatore e a quell'indice img togliere la classe hide;
- Al click up decrementare il contatore e a quell'indice img togliere la classe hide;
