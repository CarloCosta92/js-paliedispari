/*

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

// PRIMA SOLUZIONE

// richiesta parola all'utente

/*
let parola= prompt("Inserisci una parola");
*/

/* 
creo funzione che prenda i caratteri della parola inserita e li inserisca in un array,
utilizzando un for, in ordine inverso e con un if verifico che la parola inserita dall'utente sia uguale a quella 
riscritta inversa
*/

/*
function seiPalindroma(parola) {
    let parolaInversa= [];

    for(let i=parola.length -1 ; i>=0 ; i--){

        parolaInversa.push(parola[i]);
    }

    let parolaInvertita = parolaInversa.join("");

    if(parola === parolaInvertita){

        alert("palindromo");

    } else {

        alert("Non palindromo");
    }
}
*/
//invoco la funzione

seiPalindroma(parola);


//SECONDA SOLUZIONE

// richiesta parola all'utente

let parola= prompt("Inserisci una parola");

//creo funzione che concatena i caratteri in una stringa  e li controllo rispetto alla parola inserita


// invoco la funzione

