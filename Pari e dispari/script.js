/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// chiedo utente se pari o dispari
let evenOrOdd = prompt("Dimmi se scegli pari o dispari");
// chiedo il numero
let userNumber = parseInt(prompt ("Dimmi un numero da 1 a 5"));
// funzione per numero casuale del computer
function computerNumberRandom() {
    return Math.floor(Math.random() * 5) + 1;
  }
// funzione somma per dire se l'utente ha vinto in base alla scelta del pari o dispari
function result (evenOrOdd, userNumber){
    let computerNumber = computerNumberRandom();
    alert("Numero randomico del pc " + computerNumber);
   

    let sum= computerNumber + userNumber;
    alert("Somma fra numero pc e numero scelto dall'utente " + sum);
   

    let sumOddOrEven = sum%2 === 0? "pari" : "dispari" ;

    if (evenOrOdd === sumOddOrEven){
        alert ("hai Vinto");
    } else {
        alert ("hai Perso");
    }

}
// invocazione funzione vincitore

result(evenOrOdd, userNumber);







