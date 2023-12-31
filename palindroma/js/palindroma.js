// Consegna: Chiedere all’utente di inserire una parola e creare una funzione per capire se la parola inserita è palindroma oppure no 

// Procedimento: Chiedi all'utente di scrivere una parola tramite input
// 1) Aggiungi alla costante .value per poter leggere quello che l’utente ha inserito nel input.
// 2) Utilizza la funzione addEventListenerper far partire l'evento a seguito del click dell'utente sulla cta
// 3) Utilizzo il metodo delle funzioni: .split, .reverse, .join per confrontare la parola inserita dall'utente con quella invertita grazie a questo metodo
// 4) Attraverso la condizione if-else stabilisco se la parola è pallindroma oppure no 


const btnFind = document.querySelector(".btn_find");

btnFind.addEventListener("click", function () {

    const userWordImput = document.querySelector("[name='userword_input']").value;

    theWordIsPalindrome() // Invoco la funzione per verificare se la funzione è palindroma

    function theWordIsPalindrome() {

        // Con .split la parola inserita dall'utente viene convertita in una sorta di array contentente ogni lettera della singola parola divise da una virgola. Con una stringa vuota ("") divide la parola in ciascuna lettera che la compone
        let wordArray = userWordImput.split('');
        console.log(wordArray);
        // Con .reverse l'ordine dell'array creato viene invertito
        let wordReverse = wordArray.reverse();
        console.log(wordReverse);
        // Con .join viene tolta la virgola e si uniscono tutte le lettere formando una nuova parola
        let wordJoin = wordReverse.join('');
        console.log(wordJoin);

        //  Se la parola è uguale a quella nuova unita nella funzione con .join, allora la parola è palindroma altrimenti non lo è 
        if (userWordImput === wordJoin) {
            console.log("La parola è palindroma");
        } else {
            console.log("La parola non è palindroma");
        }
    }

})