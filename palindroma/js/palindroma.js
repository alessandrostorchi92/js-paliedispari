// Consegna: Chiedere all’utente di inserire una parola e creare una funzione per capire se la parola inserita è palindroma oppure no 

// Procedimento: Chiedi all'utente di scrivere una parola tramite input
// 1) Aggiungi alla costante .value per poter leggere quello che l’utente ha inserito nel input.
// 2) Utilizza la funzione addEventListenerper far partire l'evento a seguito del click dell'utente sulla cta
// 3) Attraverso .split, .reverse, .join pongo le 



const btnFind = document.querySelector(".btn_find");

btnFind.addEventListener("click", function () {

    const userWordImput = document.querySelector("[name='userword']").value;

    theWordIsPalindrome() // Invoco la funzione per verificare se la funzione è palindroma

    function theWordIsPalindrome() {

        // Con .split la parola inserita dall'utente viene convertita in una sorta di array contentente ogni lettera della singola parola  divise da una virgola
        let wordArray = userWordImput.split('');
        // Con .reverse l'ordine dell'array creato viene invertito
        let wordReverse = wordArray.reverse();
        // Con .join viene tolta la virgola e si uniscono tutte le lettere formando una nuova parola
        let wordJoin = wordReverse.join('');

        //  Se la parola è uguale a quella nuova unita nella funzione con .join, allora la parola è palindroma altrimenti non lo è 
        if (userWord === wordJoin) {
            console.log("La parola è palindroma");
        } else {
            console.log("La parola non è palindroma");
        }
    }

})