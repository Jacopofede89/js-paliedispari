// Chiedere all’utente di inserire una parola
// Creare una funzione
// Capire se la parola inserita è palindroma
//  Vedere il risultato


let verifica = document.querySelector(".verify");
// Chiedere all’utente di inserire una parola

const word = prompt("Inserisci una parola e verifichiamo se è palindroma: ");

// Creare una funzione e capiamo se la parola è palindroma

function paliandromeWord(){

    const sentence = word.length;

    // creazione di un ciclo per capire se la parola è palindroma

    for(let i=0; i < sentence; i++){
        
        if(word[i] != word[sentence -1 -i]){

            // verifica risultato negativo e stampa

            verifica.innerHTML = `Non è una parola palindroma`;

            return `Non è una parola palindroma`;
        }
    }

    // verifica risultato positivo e stampa

     verifica.innerHTML = `E' una parola palindroma`;

     return `E' una parola palindroma`;

};

const risultato = paliandromeWord(word);

