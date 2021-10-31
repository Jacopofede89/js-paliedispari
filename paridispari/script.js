// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Genera un numero random (sempre da 1 a 5) per il computer 

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari 

// Dichiariamo chi ha vinto.

    let oddEven = prompt("Pari o Dispari?");
    let numUser = parseInt(prompt("Scegli un numero da 1 a 5"));
    
    // Utilizzo una funzione generando un numero random da 1 a 5 per il pc.
    
    function casuale(){
       let pc = Math.floor(Math.random() * 5) + 1;
        return pc;
    }
    
    let random = casuale();
    
    // Genero una variabile che somma i 2 elementi.
    
    let sum = casuale() + numUser;
    
    // Uso la funzione e stabilisco se il numero è pari o dispari.
    
    function choose(number) {
        let num = "";
        if(number % 2 === 0){
            num = "pari";
        }else{
            num = "dispari";
        }
        return num;
    }
    
    var result = choose(sum);

    // Se l'utente ha scelto pari e la somma dei numeri risulta pari, allora all'utente si comunicherà che ha vinto. 
   // Se l'utente ha scelto dispari e la somma dei numeri risulta dispari, allora all'utente si comunicherà che ha vinto.
    if(oddEven === "pari") {
        console.log("Hai vinto!");
    
    
    }else if(oddEven === "dispari"){
        console.log("Hai perso!");

    // Se non sono state inserite le parole corrette (pari o dispari) viene comunicato all'utente. 

    }else{
        console.log("Non hai scelto pari o dispari");
    }
    
    
    // Console log per stabilire se tutto funziona
    console.log("Hai scelto:", oddEven)
    console.log("il numero del pc è:", random);
    console.log("il numero che hai scelto è:", numUser);
    console.log("la somma è:", result);