// Consegna: L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. 

// Procedimento: 
// 1) Chiedo all'utente di scegliere tra pari e dispari e di inserire un numero da 1 a 5
// 2) Attraverso la funzione Math.random() faccio scegliere al computer un numero compreso tra 1 e 5
// 3) Stabilisco attraverso la condizione if e else se la somma dei due numeri e pari o dispari
// 4) Verifico se ha vinto l'utente oppure il cpu: se la somma dei numeri è pari e l'utente ha scelto pari e viceversa allora ha l'utente ha vinto, altrimenti ha vinto il cpu



// Esercizio: 

// Chiedo all'utente di scegliere pari o dispari e poi di inserire un numero compreso tra 1 e 5 

const evenOrOdd = prompt("Scegli pari o dispari");
const chosenUserNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));

// Controllo input(prompt) utente
if (isNaN(chosenUserNumber) || chosenUserNumber < 1 || chosenUserNumber > 5) {
    alert("Si è verificato un errore");
    location.reload();
}

// Per fa generare al computer un numero random compreso tra 1 e 5 utilizzo una funzione 

computerRandomNumber(); // Invoco la funzione che genera un numero casuale al computer

/**
 * @returns {number}
 * @param {number}
 */

function computerRandomNumber() {
    const cpuNumber = Math.floor(Math.random() * 5) + 1;
    console.log(`Il numero random compreso tra 1 e 5 scelto dal computer è : ${cpuNumber}`);
    return cpuNumber;
}

// Utilizzo la funzione somma per sommare il numero scelto dall'utente e dal cpu


let sumResult = sumNumbers(chosenUserNumber, computerRandomNumber()); // Invoco la funzione che genera la somma dei due numeri 


/**
 * @param {number} chosenUserNumber 
 * @param {number} cpuNumber 
 * @returns {number}
 */

function sumNumbers(chosenUserNumber, cpuNumber) {
    const sumResult = chosenUserNumber + cpuNumber;
    console.log(`La somma tra il numero scelto dall'utente e quello scelto dal cpu è : ${sumResult}`);
    return sumResult;
}

// Stabilisco se la somma dei due numeri e pari o dispari 

if (sumResult % 2 === 0) {
    console.log("La somma dei due numeri è pari");
} else {
    console.log("La somma dei due numeri è dispari");
}

// Verifico se ha vinto l'utente oppure il cpu

if (sumResult = "pari" && evenOrOdd === "pari") {
    console.log("Hai vinto!");
} else if (sumResult = "dispari" && evenOrOdd === "dispari") {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso");
}
